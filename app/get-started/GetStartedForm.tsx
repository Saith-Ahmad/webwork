'use client';

import React, { useState } from 'react';
import { InlineWidget } from 'react-calendly';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';


const ContactForm = () => {
    const initialFormData = {
        firstName: '',
        lastName: '',
        workEmail: '',
        companySize: '',
        companyWebsite: '',
        phoneNumber: '',
        headquarters: '',
    };

    const [formData, setFormData] = useState(initialFormData);
    const [submitting, setSubmitting] = useState(false);
    const [isFormValid, setIsFormValid] = useState(false);
    const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        workEmail: '',
        companySize: '',
        companyWebsite: '',
        phoneNumber: '',
        headquarters: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prevData => {
            const updatedData = { ...prevData, [name]: value };
            setIsFormValid(Object.values(updatedData).every(val => val.trim() !== ''));  // Update validity
            return updatedData;
        });
        setErrors({ ...errors, [name]: '' });
    };

    const validateForm = () => {
        const newErrors: any = {};
        if (!formData.firstName) newErrors.firstName = 'First name is required';
        if (!formData.lastName) newErrors.lastName = 'Last name is required';
        if (!formData.workEmail) newErrors.workEmail = 'Work email is required';
        if (!formData.companySize) newErrors.companySize = 'Company size is required';
        if (!formData.phoneNumber) newErrors.phoneNumber = 'Phone number is required';
        if (!formData.headquarters) newErrors.headquarters = 'Headquarters is required';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        setSubmitting(true);
        e.preventDefault();
        if (validateForm()) {
            try {
                const response = await fetch("https://script.google.com/macros/s/AKfycbyuK3DTmChvzZZoeVcXmt01zCSxDJHCc9Be7Ckua-fZ1F3eTQ3ndpGKG7mwvAH5zUnR/exec", {
                    method: "POST",
                    mode: "no-cors",  // Disable CORS (not recommended for production)
                    body: JSON.stringify(formData),
                    headers: {
                        "Content-Type": "application/json",
                    },
                });

                if (response) {
                    console.log("Data sent successfully");
                    // setFormData(initialFormData);  // Clear the form
                    setIsFormValid(false);  // Reset form validity
                    setIsCalendlyOpen(true);
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
            <h2 className='text-center text-3xl md:text-4xl font-bold'>Get Started with BeyondHut</h2>
            <p className='text-lg text-black text-center mt-3'>Schedule a 30-minute product demo with expert Q&A</p>
            <form onSubmit={handleSubmit} className="w-full h-full min-h-[55vh] mx-auto grid grid-cols-1 md:grid-cols-2 gap-2 md:p-4 mt-10">
                <InputField id="firstName" label="First name" value={formData.firstName} error={errors.firstName} onChange={handleChange} />
                <InputField id="lastName" label="Last name" value={formData.lastName} error={errors.lastName} onChange={handleChange} />
                <InputField id="workEmail" label="Work Email" type="email" value={formData.workEmail} error={errors.workEmail} onChange={handleChange} />

                <div className="relative">
                    <select
                        id="companySize"
                        name="companySize"
                        value={formData.companySize}
                        onChange={handleChange}
                        className={`peer border rounded-md py-3 px-4 w-full focus:outline-none focus:border-black focus:ring-1 focus:ring-black ${errors.companySize && 'border-red-500'}`}
                    >
                        <option value="">Company Size</option>
                        <option value="1-10">1-10</option>
                        <option value="11-50">11-50</option>
                        <option value="51-200">51-200</option>
                        <option value="201-500">201-500</option>
                        <option value="500+">500+</option>
                    </select>
                    {errors.companySize && <span className="text-red-500 text-xs mt-1">{errors.companySize}</span>}
                </div>

                <InputField id="companyWebsite" label="Company Website" value={formData.companyWebsite} onChange={handleChange} />
                <InputField id="phoneNumber" label="Phone Number" value={formData.phoneNumber} error={errors.phoneNumber} onChange={handleChange} />
                <InputField id="headquarters" label="Headquarters" value={formData.headquarters} error={errors.headquarters} onChange={handleChange} className="md:col-span-2" />

                <p className='text-sm text-center text-black my-2 md:col-span-2'>
                    We respect your data. By submitting this form, you agree that we will contact you in relation to our products and services, in accordance with our privacy policy.
                </p>

                <button
                    type="submit"
                    className={`font-semibold md:col-span-2 bg-[#00B7EB] text-center text-white py-2 rounded-md hover:bg-gray-800 transition-all ${(!isFormValid || submitting) && 'opacity-50 cursor-not-allowed'}`}
                    disabled={!isFormValid || submitting}  // Disable when form is invalid or submitting
                >
                    {submitting ? "Loading..." : "Book a demo"}
                </button>
            </form>
            {isCalendlyOpen &&
                <>
                    <Dialog open={isCalendlyOpen} onOpenChange={(open) => setIsCalendlyOpen(open)}>
                        <DialogContent
                            className="max-w-[95vw] md:max-w-[700px] md:max-h-[95vh] max-h-[80vh] bg-[#FDFCF3] rounded-lg"
                            onInteractOutside={(e) => {
                                e.preventDefault();
                            }}
                        >
                            <DialogHeader>
                                <DialogTitle className="text-center text-black font-bold">Schedule a Meeting</DialogTitle>
                            </DialogHeader>
                            {/* Container for Calendly Widget with fixed height */}
                            <div className="h-[600px] overflow-hidden rounded-lg">
                                <InlineWidget
                                    url="https://calendly.com/fahad-aslam4500"
                                    styles={{
                                        height: "100%",
                                        minWidth: "320px",
                                    }}
                                    pageSettings={{
                                        backgroundColor: 'ffffff',
                                        primaryColor: '00B7EB',
                                        textColor: '000000',
                                        hideEventTypeDetails: false,
                                        hideLandingPageDetails: false,
                                    }}
                                />
                            </div>
                        </DialogContent>
                    </Dialog>
                </>
            }

            {/* )} */}
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
            className={`peer border rounded-md py-3 px-4 w-full focus:outline-none focus:border-black ${error && 'border-red-500'}`}
        />
        <label
            htmlFor={id}
            className="absolute left-3 -top-2.5 text-gray-600 text-sm transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-black peer-focus:font-semibold peer-focus:bg-white"
        >
            {label}
        </label>
        {error && <span className="text-red-500 text-xs mt-1">{error}</span>}
    </div>
);

export default ContactForm;
