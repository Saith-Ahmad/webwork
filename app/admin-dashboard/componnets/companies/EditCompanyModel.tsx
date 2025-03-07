'use client';
import React, { useState } from 'react';
import { Company } from '@/lib/constants/types';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

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

    const handleSave = () => {
        if (company) {
            const updatedCompany = { ...company, name, image, description };
            onSave(updatedCompany);
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="bg-[#FDFCF3]">
                <DialogHeader>
                    <DialogTitle>Update Company</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                    <Input
                        placeholder="Company Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <Input
                        placeholder="Image URL"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                    />
                    <Textarea
                        placeholder="Description"
                        rows={10}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <DialogFooter className="mt-4">
                    <Button variant="secondary" onClick={onClose} className='bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600'>Cancel</Button>
                    <Button onClick={handleSave}>Save Changes</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default UpdateCompanyModal;
