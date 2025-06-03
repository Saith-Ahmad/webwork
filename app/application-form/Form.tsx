

type FormDataType = {
    firstName: string;
    lastName: string;
    linkedinurl: string;
    phoneNumber: string;
    videoLink: string;
};


'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';  // Import useRouter for redirection

const Form = () => {
    const initialFormData = {
        firstName: '',
        lastName: '',
        linkedinurl: '',
        phoneNumber: '',
        videoLink: '',
    };

    const [formData, setFormData] = useState<FormDataType>(initialFormData);
    const [submitting, setSubmitting] = useState(false);
    const [isFormValid, setIsFormValid] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');  // State for success message
    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        linkedinurl: '',
        phoneNumber: '',
        videoLink: '',
    });

    const router = useRouter();  // Initialize useRouter

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prevData => {
            const updatedData = { ...prevData, [name]: value } as FormDataType;

            const requiredFields: (keyof FormDataType)[] = ['firstName', 'lastName', 'linkedinurl', 'phoneNumber'];
            const isValid = requiredFields.every(field => updatedData[field].trim() !== '');
            setIsFormValid(isValid);

            return updatedData;
        });

        setErrors(prevErrors => ({ ...prevErrors, [name]: '' }));
    };


    const validateForm = () => {
        const newErrors: any = {};
        if (!formData.firstName) newErrors.firstName = 'First name is required';
        if (!formData.lastName) newErrors.lastName = 'Last name is required';
        if (!formData.linkedinurl) newErrors.linkedinurl = 'LinkedIn Profile URL is required';
        if (!formData.phoneNumber) newErrors.phoneNumber = 'Phone number is required';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        setSubmitting(true);
        e.preventDefault();
        if (validateForm()) {
            try {
                console.log('Sending data:', formData); 
                const response = await fetch("https://script.google.com/macros/s/AKfycbzrpASC3jcXHmn5t5-NCG-TlmXj-PpIwuN8toJPl-uNH0IQ3OyAB_mxjANAccagRGy2IQ/exec", 
                    {
                    method: "POST",
                    mode: "no-cors",
                    body: JSON.stringify(formData),
                    headers: {
                        "Content-Type": "application/json",
                    },
                });

                if (response) {
                    setFormData(initialFormData);  // Clear form fields
                    setIsFormValid(false);          // Reset form validity
                    setSuccessMessage('Data sent successfully!');  // Show success message

                    // Redirect to home page after 3 seconds
                    setTimeout(() => {
                        router.push('/');
                    }, 3000);
                } else {
                    console.log("Failed to send data");
                }
            } catch (error) {
                console.log("Error:", error);
            } finally {
                setSubmitting(false);
            }
        } else {
            setSubmitting(false);
        }
    };

    return (
        <div className='md:mt-10'>
            <h2 className='text-center text-3xl md:text-4xl font-bold font-roca'>Be a part of our talent pool</h2>

            {successMessage && (
                <p className='text-center text-green-600 my-4'>
                    {successMessage}
                </p>
            )}

            <form onSubmit={handleSubmit} className="w-full h-full min-h-[20vh] mx-auto grid grid-cols-1 md:grid-cols-2 gap-3 md:p-1 mt-10">
                <InputField id="firstName" label="First name" value={formData.firstName} error={errors.firstName} onChange={handleChange} />
                <InputField id="lastName" label="Last name" value={formData.lastName} error={errors.lastName} onChange={handleChange} />
                <InputField id="linkedinurl" label="LinkedIn Profile URL" value={formData.linkedinurl} error={errors.linkedinurl} onChange={handleChange} />
                <InputField id="phoneNumber" label="Phone Number" value={formData.phoneNumber} error={errors.phoneNumber} onChange={handleChange} />
                <InputField id="videoLink" label="Add your video link here" value={formData.videoLink} error={errors.videoLink} onChange={handleChange} className="md:col-span-2" />


                <p className='text-sm text-center text-black my-2 md:col-span-2'>
                    We respect your data. By submitting this form, you agree that we will contact you in relation to our products and services, in accordance with our privacy policy.
                </p>

                <div className="md:col-span-2 flex justify-center">
                    <button
                        type="submit"
                        className={`ml-[50%]  translate-x-[-50%] font-semibold md:col-span-2 bg-[#00B7EB] text-center text-white py-3 min-w-[200px] rounded-md hover:bg-gray-800 transition-all ${(!isFormValid || submitting) && 'opacity-90 cursor-not-allowed'}`}
                        disabled={!isFormValid || submitting}
                    >
                        {submitting ? "Loading..." : "Sign up"}
                    </button>
                </div>
            </form>
        </div>
    );
};

const InputField = ({
    id,
    label,
    type = 'text',
    value,
    error,
    onChange,
    className = '',
}: {
    id: string;
    label: string;
    type?: string;
    value: string;
    error?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
}) => (
    <div className={`relative ${className}`}>
        <input
            type={type}
            id={id}
            name={id}
            placeholder=" "
            value={value}
            onChange={onChange}
            className={`peer border-2 border-[#D4D4D4] rounded-md py-3 px-4 w-full font-semibold  focus:border-black placeholder:text-black bg-[#F8F8F8] ${error && 'border-red-500'}`}
        />
        <label
            htmlFor={id}
            className="absolute left-3 -top-2.5 text-gray-800 rounded-sm bg-[#F8F8F8] text-sm transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-[#BDBDBD] peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-black peer-focus:font-semibold peer-focus:bg-[#F8F8F8]"
        >
            {label}
        </label>
        {error && <span className="text-red-500 text-xs mt-1">{error}</span>}
    </div>
);

export default Form;
