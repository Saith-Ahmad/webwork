'use client';
import React, { useState, useEffect, useCallback } from 'react';
import AddCompany from './AddCompany';
import Companies from './companies';
import { Company } from '@/lib/constants/types';
import UpdateCompanyModal from './EditCompanyModel';
import { toast } from "sonner";
import { Input } from '@/components/ui/input';

function AllCompanies() {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState(""); // For debouncing
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);

  // Debounce effect for search query
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchQuery(searchQuery);
    }, 700); // 500ms debounce time

    return () => {
      clearTimeout(handler);
    };
  }, [searchQuery]);

  // Fetch companies based on page and debounced search query
  const fetchCompanies = async (page = 1, limit = 6, search = "") => {
    setLoading(true);
    try {
      const response = await fetch(`/api/companies?page=${page}&limit=${limit}&search=${search}`);
      const result = await response.json();
      setCompanies(result.data);
      setTotalPages(result.totalPages);
      setCurrentPage(result.currentPage);
    } catch (error) {
      console.error('Failed to fetch companies:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCompanies(currentPage, 6, debouncedSearchQuery);
  }, [currentPage, debouncedSearchQuery]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const handleAddCompany = async (newCompany: Omit<Company, 'id'>) => {
    try {
      const response = await fetch('/api/companies', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newCompany),
      });

      if (response.ok) {
        toast.success("New company added successfully");
        fetchCompanies(currentPage, 5, debouncedSearchQuery); // Refresh list
      } else {
        toast.error("Failed to add new company");
      }
    } catch (error) {
      console.error('Error adding company:', error);
      toast.error("Failed to add new company", {
        description: `${error}`
      });
    }
  };

  const handleDeleteCompany = async (companyId: string) => {
    try {
      const response = await fetch(`/api/companies/${companyId}`, { method: 'DELETE' });
      if (response.ok) {
        toast.success("Company deleted successfully");
        fetchCompanies(currentPage, 5, debouncedSearchQuery); // Refresh list
      } else {
        toast.error("Failed to delete company");
      }
    } catch (error) {
      toast.error("An Error occurred while deleting", {
        description: `${error}`
      });
    }
  };

  const handleUpdateClick = (company: Company) => {
    setSelectedCompany(company);
    setIsModalOpen(true);
  };

  const handleUpdateCompany = async (updatedCompany: Company) => {
    try {
      const response = await fetch(`/api/companies/${updatedCompany._id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedCompany),
      });

      if (response.ok) {
        toast.success("Company info updated successfully");
        setIsModalOpen(false);
        setSelectedCompany(null);
        fetchCompanies(currentPage, 5, debouncedSearchQuery); // Refresh list
      } else {
        toast.error('Failed to update company.');
      }
    } catch (error) {
      console.error('Error updating company:', error);
      toast.error('An error occurred.');
    }
  };

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="md:p-6 flex flex-col gap-4">

      <div className='min-h-[90vh]'>
        {/* Search Bar */}
        <Input
          type="text"
          placeholder="Search companies..."
          value={searchQuery}
          onChange={handleSearch}
          className="mb-4 border border-gray-300 py-7 px-4 rounded-lg shadow-md shadow-[#00000061]"
        />

        {/* Companies List */}
        <Companies
          companies={companies}
          loading={loading}
          onDeleteCompany={handleDeleteCompany}
          onUpdateClick={handleUpdateClick}
        />

        {/* Pagination Controls */}
        {
          (!loading && companies.length > 0) &&
          <div className="flex justify-center gap-2 my-12">
            <button
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-3 py-1 border rounded-lg bg-gray-200 disabled:bg-gray-100"
            >
              Previous
            </button>
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => goToPage(i + 1)}
                className={`px-3 py-1 border rounded-lg ${currentPage === i + 1 ? "bg-black text-white" : "bg-white text-black"}`}
              >
                {i + 1}
              </button>
            ))}
            <button
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-3 py-1 border rounded-lg bg-gray-200 disabled:bg-gray-100"
            >
              Next
            </button>
          </div>

        }

      </div>

      {/* Add Company Form */}
      <div className='w-full'>
        {!loading && <AddCompany onAddCompany={handleAddCompany} />}
      </div>

      {/* Update Company Modal */}
      {selectedCompany && (
        <UpdateCompanyModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSave={handleUpdateCompany}
          company={selectedCompany}
        />
      )}
    </div>
  );
}

export default AllCompanies;
