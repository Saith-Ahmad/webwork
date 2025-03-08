'use client';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Company } from '@/lib/constants/types';
import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'sonner';
import { Loader } from 'lucide-react';

type Props = {
  onAddCompany: (company: Company) => void;
};

const AddCompany: React.FC<Props> = ({ onAddCompany }) => {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 1024 * 1024) {
        toast.error("File Too Large", {
          description: "Please upload an image smaller than 1MB.",
        });
        return;
      }

      const formData = new FormData();
      formData.append('image', file);

      try {
        setUploading(true);
        const res = await axios.post('/api/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        setImage(res.data.url);
        toast.success("Image Uploaded Successfully");
      } catch (error) {
        console.error('Upload Error:', error);
        toast.error("Upload Failed", {
          description: "Could not upload image. Please try again.",
        });
      } finally {
        setUploading(false);
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!image) {
      toast.error("Missing Image", {
        description: "Please upload an image first.",
      });
      return;
    }

    setLoading(true);

    const newCompany = { name, image, description };
    onAddCompany(newCompany);

    setLoading(false);
    toast.success("Company Added Successfully");
    setName('');
    setImage('');
    setDescription('');
  };

  return (
    <div className="w-full mx-auto p-6 rounded-lg shadow-lg mb-6 shadow-[#00000092]">
      <h2 className="text-2xl font-semibold mb-4">Add New Company</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          type="text"
          placeholder="Company Title"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-2 shadow-md shadow-gray-300"
          required
        />

        <Input
          type="file"
          accept="image/png, image/jpeg, image/jpg, image/svg+xml"
          onChange={handleImageChange}
          className="w-full px-4 py-2 rounded-md shadow-md shadow-gray-300"
          required
        />

        {uploading && <p className="text-blue-500 flex"> <Loader className='animate-spin'/>Uploading image...</p>}
        {image && (
          <img src={image} alt="Uploaded" className="w-32 h-32 object-cover rounded-md mb-4" />
        )}

        <Textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full px-4 py-2 rounded-md shadow-md shadow-gray-300"
          rows={5}
          required
        />

        <button
          type="submit"
          disabled={loading || uploading}
          className="w-full bg-gray-800 py-2 rounded-md text-white disabled:bg-gray-400 hover:bg-gray-900"
        >
          {loading ? 'Adding...' : 'Add Company'}
        </button>
      </form>
    </div>
  );
};

export default AddCompany;
