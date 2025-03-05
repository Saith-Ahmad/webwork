// 'use client';
// import React, { useState, useEffect } from 'react';
// import AddCompany from './AddCompany';
// import Companies from './companies';
// import { Company } from '@/lib/constants/types';


// function AllCompanies() {
//   const [companies, setCompanies] = useState<Company[]>([]);
//   const [loading, setLoading] = useState(false);

//   // Fetch companies initially
//   useEffect(() => {
//     const fetchCompanies = async () => {
//       setLoading(true);
//       try {
//         const response = await fetch('/api/companies'); 
//         const result = await response.json();
//         console.log(result.data);
//         setCompanies(result.data);
//       } catch (error) {
//         console.error('Failed to fetch companies:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCompanies();
//   }, []);

//   // Function to add a new company
//   const handleAddCompany = async (newCompany: Omit<Company, 'id'>) => {
//     try {
//       const response = await fetch('/api/companies', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(newCompany),
//       });

//       if (response.ok) {
//         const addedCompany = await response.json();
//         setCompanies((prev) => [...prev, addedCompany]);
//       } else {
//         alert('Failed to add company.');
//       }
//     } catch (error) {
//       console.error('Error adding company:', error);
//       alert('An error occurred.');
//     }
//   };

//   return (
//     <div className="p-6">
//       <AddCompany onAddCompany={handleAddCompany} />
//       <Companies companies={companies} loading={loading} />
//     </div>
//   );
// }

// export default AllCompanies;



'use client';
import React, { useState, useEffect } from 'react';
import AddCompany from './AddCompany';
import Companies from './companies';
import { Company } from '@/lib/constants/types';
import { useRouter } from 'next/navigation';

function AllCompanies() {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();  // For page refresh

  // Fetch companies initially
  const fetchCompanies = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/companies');
      const result = await response.json();
      setCompanies(result.data);
    } catch (error) {
      console.error('Failed to fetch companies:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCompanies();
  }, []);

  // Function to add a new company
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
        router.refresh();  // Refresh the page to fetch the updated list
      } else {
        alert('Failed to add company.');
      }
    } catch (error) {
      console.error('Error adding company:', error);
      alert('An error occurred.');
    }
  };

  // 🛠 Function to delete a company
  const handleDeleteCompany = async (companyId: string) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this company?");
    if (!confirmDelete) return;

    try {
      const response = await fetch(`/api/companies/${companyId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setCompanies((prev) => prev.filter((company) => company._id !== companyId));
      } else {
        alert('Failed to delete company.');
      }
    } catch (error) {
      console.error('Error deleting company:', error);
      alert('An error occurred.');
    }
  };

  return (
    <div className="p-6">
      <AddCompany onAddCompany={handleAddCompany} />
      <Companies companies={companies} loading={loading} onDeleteCompany={handleDeleteCompany} />
    </div>
  );
}

export default AllCompanies;
