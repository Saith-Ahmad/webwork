'use client';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Company } from '@/lib/constants/types';
import React, { useState } from 'react';


type Props = {
  onAddCompany: (company: Company) => void;
};

const AddCompany: React.FC<Props> = ({ onAddCompany }) => {
  const [name, setName] = useState('');
  const [image, setImage] = useState('https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    const newCompany = { name, image, description };
    onAddCompany(newCompany);

    setLoading(false);
    setName('');
    setImage('https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
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
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="w-full px-4 py-2 rounded-md shadow-md shadow-gray-300"
          required
        />
        <Textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full px-4 py-2  rounded-md shadow-md shadow-gray-300"
          rows={5}
          required
        ></Textarea>
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-gray-800 py-2 rounded-md text-white disabled:bg-gray-400 hover:bg-gray-900"
        >
          {loading ? 'Adding...' : 'Add Company'}
        </button>
      </form>
    </div>
  );
};

export default AddCompany;


