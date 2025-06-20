'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { CloudUpload, CheckCircle, XCircle, Loader } from 'lucide-react';

type FormDataType = {
    firstName: string;
    lastName: string;
    linkedinurl: string;
    phoneNumber: string;
    videoLink: string;
};

const GOOGLE_DRIVE_UPLOAD_URL = 'https://script.google.com/macros/s/AKfycbxuoByF8iNCUMApLCOMfzZ896xF8RoKH97w3SaFAausGo1jneBe0woCfhhqL41VOXCo_g/exec';
const GOOGLE_SHEETS_URL = "https://script.google.com/macros/s/AKfycbznh6O9Qam5_oGoFQqu3oozZkjCKt3LvdIMG4pxtU3uyFVnf8Wz_Py0pnbHJ_qzlnmEuw/exec"

const Form = () => {
    const [formData, setFormData] = useState<FormDataType>({
        firstName: '',
        lastName: '',
        linkedinurl: '',
        phoneNumber: '',
        videoLink: '',
    });
    const [uploadedFile, setUploadedFile] = useState<File | null>(null);
    const [fileUploadUrl, setFileUploadUrl] = useState<string>('');
    const [uploadError, setUploadError] = useState<string>('');
    const [isUploading, setIsUploading] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [isFormValid, setIsFormValid] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [errors, setErrors] = useState<any>({});

    const router = useRouter();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        const updated = { ...formData, [name]: value };
        setFormData(updated);
        const required = ['firstName', 'lastName', 'linkedinurl', 'phoneNumber'];
        setIsFormValid(required.every(field => updated[field as keyof FormDataType]?.trim()));
        setErrors((prev: any) => ({ ...prev, [name]: '' }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        if (file.size > 10 * 1024 * 1024) {
            setUploadError('File size must be 10MB or less.');
            setUploadedFile(null);
            return;
        }

        setUploadError('');
        setUploadedFile(file);
        convertFileToBase64(file);
    };

    const convertFileToBase64 = async (file: File) => {
        setIsUploading(true);
        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = async () => {
            try {
                const base64File = (reader.result as string).split(',')[1];
                const payload = {
                    file: base64File,
                    mimeType: file.type,
                    fileName: file.name,
                };

                const response = await fetch(GOOGLE_DRIVE_UPLOAD_URL, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'text/plain;charset=utf-8',
                    },
                    body: JSON.stringify(payload),
                });

                const result = await response.json();
                if (result.success && result.fileUrl) {
                    setFileUploadUrl(result.fileUrl);
                    setUploadError('');
                } else {
                    throw new Error(result.message || 'Unknown error from Google Script.');
                }
            } catch (error: any) {
                console.error('Upload failed:', error);
                setUploadError(error.message);
                setFileUploadUrl('');
            } finally {
                setIsUploading(false);
            }
        };

        reader.onerror = () => {
            setIsUploading(false);
            setUploadError('Failed to read the file.');
        };
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
        e.preventDefault();
        setSubmitting(true);
        setSuccessMessage('');

        if (!validateForm()) {
            setSubmitting(false);
            return;
        }

        try {
            const allData = { ...formData, fileUrl: fileUploadUrl };
            console.log(allData);

            const response = await fetch('/api/sendtosheet', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(allData),
            });

            console.log("response ====, ", response);
            const result = await response.json();
            console.log('Google Sheets response:', result);

            // Reset form
            setFormData({ firstName: '', lastName: '', linkedinurl: '', phoneNumber: '', videoLink: '' });
            setUploadedFile(null);
            setFileUploadUrl('');
            setIsFormValid(false);
            setSuccessMessage('Data sent successfully!');
            setTimeout(() => router.push('/'), 3000);
        } catch (err: any) {
            console.error('Submission error:', err);
        } finally {
            setSubmitting(false);
        }
    };

   return (
    <div className="md:mt-10">
        <h2 className="text-center text-3xl md:text-4xl font-bold font-roca">Be a part of our talent pool</h2>

        {successMessage && (
            <p className="text-center text-green-600 my-4">{successMessage}</p>
        )}

        <form onSubmit={handleSubmit} className="w-full h-full min-h-[20vh] mx-auto grid grid-cols-1 md:grid-cols-2 gap-3 md:p-1 mt-10">

            <InputField id="firstName" label="First name" value={formData.firstName} error={errors.firstName} onChange={handleChange} />
            <InputField id="lastName" label="Last name" value={formData.lastName} error={errors.lastName} onChange={handleChange} />
            <InputField id="linkedinurl" label="LinkedIn Profile URL" value={formData.linkedinurl} error={errors.linkedinurl} onChange={handleChange} />
            <InputField id="phoneNumber" label="Phone Number" value={formData.phoneNumber} error={errors.phoneNumber} onChange={handleChange} />
            <InputField id="videoLink" label="Short Video Intro (1 min) - Google Drive or Loom Link" value={formData.videoLink} onChange={handleChange} className="md:col-span-2" />

            <div className="flex flex-col justify-center items-center gap-1 border-2 border-dashed border-gray-300 rounded-md p-4 text-center md:col-span-2">
                <CloudUpload className='text-[#00B7EB] mx-auto' size={40} />
                <p className='text-lg'>Select a file or drag and drop here</p>
                <p className='text-gray-400 text-sm'>JPG, PNG or PDF, file size no more than 10MB</p>

                <label htmlFor="fileUpload"
                    className={`cursor-pointer px-5 py-2 text-sm bg-blue-50 border-[2px] border-[#00B7EBB2] text-[#00B7EBB2] font-medium rounded hover:bg-[#00B7EBB2] hover:text-white transition-all ${isUploading ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                    Updated Resume
                </label>

                <input
                    id="fileUpload"
                    type="file"
                    accept=".jpg,.jpeg,.png,.pdf"
                    onChange={handleFileChange}
                    className="mt-2 hidden"
                    disabled={isUploading}
                />

                {uploadedFile && (
                    <p className="text-sm text-gray-600 mt-1">
                        <span className="font-medium">{uploadedFile.name}</span>
                    </p>
                )}

                {isUploading && <Loader className="mx-auto animate-spin" />}
                {fileUploadUrl && <p className="text-green-500 text-xs">File Uploaded Successfully</p>}
                {uploadError && <p className="text-red-500 mt-2">{uploadError}</p>}
            </div>

            <p className='text-sm text-center text-black my-2 md:col-span-2'>
                We respect your data. By submitting this form, you agree that we will contact you in relation to our products and services, in accordance with our privacy policy.
            </p>

            <div className="md:col-span-2 flex justify-center">
                <button
                    type="submit"
                    className={`ml-[50%] translate-x-[-60%] font-semibold bg-[#00B7EB] text-white py-3 min-w-[200px] rounded-md hover:bg-gray-800 transition-all ${(!isFormValid || submitting || isUploading) && 'opacity-90 cursor-not-allowed'}`}
                    disabled={!isFormValid || submitting || isUploading}
                >
                    {submitting ? 'Submitting...' : 'Submit'}
                </button>
            </div>
        </form>
    </div>
);

};

export default Form;












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
            className={`peer border-2 border-[#D4D4D4] rounded-md py-3 px-4 w-full font-semibold bg-[#F8F8F8] focus:border-black placeholder:text-black ${error && 'border-red-500'}`}
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
