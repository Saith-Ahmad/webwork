'use client';
import React, { useState } from 'react';
import { Company } from '@/lib/constants/types';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import axios from 'axios';
import { Loader2 } from 'lucide-react';
import { toast, Toaster } from 'sonner';  // Correct import

type Props = {
    isOpen: boolean;
    onClose: () => void;
    onSave: (updatedCompany: Company) => void;
    company: Company | null;
};

const UpdateCompanyModal: React.FC<Props> = ({ isOpen, onClose, onSave, company }) => {
    const [name, setName] = useState(company?.name || '');
    const [image, setImage] = useState(company?.image || '');
    const [description, setDescription] = useState(company?.description || '');
    const [uploading, setUploading] = useState(false);
    const [loading, setLoading] = useState(false);

    // Handle Image Upload
    const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            if (file.size > 1024 * 1024) {
                toast.error("File Too Large", {
                    description: "Please upload an image smaller than 1MB."
                });
                return;
            }

            const formData = new FormData();
            formData.append('image', file);

            try {
                setUploading(true);
                const res = await axios.post('/api/upload', formData, {
                    headers: { 'Content-Type': 'multipart/form-data' },
                });
                setImage(res.data.url);
                toast.success("Image Uploaded Successfully");
            } catch (error) {
                toast.error("Upload Failed", {
                    description: "Could not upload image. Please try again."
                });
            } finally {
                setUploading(false);
            }
        }
    };

    const handleSave = async () => {
        if (!name.trim() || !description.trim()) {
            toast.error("Missing Information", {
                description: "Name and description cannot be empty."
            });
            return;
        }

        if (company) {
            try {
                setLoading(true);
                const updatedCompany = { ...company, name, image, description };
                await onSave(updatedCompany);
            } catch (error: any) {
                // toast.error("Failed to Update");
            } finally {
                setLoading(false);
            }
        }
    };

    return (
        <>
            <Dialog open={isOpen} onOpenChange={onClose}>
                <DialogContent className="bg-[#FDFCF3] max-w-lg">
                    <DialogHeader>
                        <DialogTitle>Update Company</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                        <Input
                            placeholder="Company Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="shadow-sm"
                        />
                        <div>
                            <label className="block mb-1 text-sm font-medium text-gray-700">Company Logo</label>
                            <input
                                type="file"
                                accept="image/png, image/jpeg, image/svg+xml"
                                onChange={handleImageChange}
                                className="file-input"
                            />
                            {uploading && (
                                <div className="flex items-center mt-2 text-sm text-gray-500">
                                    <Loader2 className="animate-spin mr-2" />
                                    Uploading...
                                </div>
                            )}
                            {image && (
                                <img
                                    src={image}
                                    alt="Company Logo"
                                    className="mt-2 w-24 h-24 rounded-md object-cover shadow-sm"
                                />
                            )}
                        </div>
                        <Textarea
                            placeholder="Description"
                            rows={5}
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="shadow-sm"
                        />
                    </div>
                    <DialogFooter className="mt-4">
                        <Button variant="outline" onClick={onClose} className="mr-2">
                            Cancel
                        </Button>
                        <Button onClick={handleSave} disabled={loading || uploading}>
                            {loading ? (
                                <div className="flex items-center">
                                    <Loader2 className="animate-spin mr-2" />
                                    Saving...
                                </div>
                            ) : (
                                'Save Changes'
                            )}
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    );
};

export default UpdateCompanyModal;
