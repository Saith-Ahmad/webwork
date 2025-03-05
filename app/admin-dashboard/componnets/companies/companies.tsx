
// 'use client';
// import React from 'react';
// import Image from 'next/image';
// import { Company } from '@/lib/constants/types';
// import { Skeleton } from '@/components/ui/skeleton';
// import { Button } from '@/components/ui/button';



// type Props = {
//     companies: Company[];
//     loading: boolean;
// };

// const Companies: React.FC<Props> = ({ companies, loading }) => {
//     if (loading) {
//         return (
//             <div className="grid grid-cols-1 gap-2">
//                 {Array.from({ length: 3 }).map((_, index) => (
//                     <div key={index} className="p-4 rounded-lg">
//                         <Skeleton className="w-full h-4 mb-2 bg-[#161c28ad]" />
//                         <Skeleton className="h-3 w-[70%] mb-2 bg-[#161c28ad]" />
//                         <Skeleton className="h-3 w-[50%] bg-[#161c28ad]" />
//                     </div>
//                 ))}
//             </div>
//         )
//     }

//     return (
//         <div className="grid gap-2 grid-cols-1 p-6">
//             {companies.length > 0 ?
//                 <>
//                     {companies.map((company, index) => (
//                         <div
//                             key={index}
//                             className="bg-[#161C28] p-2 justify-between items-end rounded-lg shadow-md text-white flex flex-row gap-3"
//                         >
//                             <Image
//                                 src={company?.image}
//                                 alt={company?.name || 'logo'}
//                                 width={50}
//                                 height={50}
//                                 className=" mb-4 bg-white rounded-full w-[50px] h-[50px]"
//                             />
//                             <div className='flex flex-col gap-0'>
//                                 <h3 className="text-xl font-semibold">{company.name}</h3>
//                                 <p className="text-sm">
//                                     {company?.description?.length > 150
//                                         ? `${company.description.slice(0, 200)}...`
//                                         : company.description}
//                                 </p>
//                             </div>


//                             <div className='flex flex-col justify-center items-center gap-2'> 
//                                 <Button>Delete</Button>
//                                 <Button>Update</Button>
//                             </div>
//                         </div>
//                     ))}
//                 </>
//                 :
//                 <h2>No Companies Found</h2>
//             }

//         </div>
//     );
// };

// export default Companies;


'use client';
import React from 'react';
import Image from 'next/image';
import { Company } from '@/lib/constants/types';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';

type Props = {
    companies: Company[];
    loading: boolean;
    onDeleteCompany: (companyId: string) => void;  // Accept delete function as prop
};

const Companies: React.FC<Props> = ({ companies, loading, onDeleteCompany }) => {
    if (loading) {
        return (
            <div className="grid grid-cols-1 gap-2">
                {Array.from({ length: 3 }).map((_, index) => (
                    <div key={index} className="p-4 rounded-lg">
                        <Skeleton className="w-full h-4 mb-2 bg-[#161c28ad]" />
                        <Skeleton className="h-3 w-[70%] mb-2 bg-[#161c28ad]" />
                        <Skeleton className="h-3 w-[50%] bg-[#161c28ad]" />
                    </div>
                ))}
            </div>
        )
    }

    return (
        <div className="grid gap-2 grid-cols-1 p-6">
            {companies.length > 0 ?
                <>
                    {companies.map((company, index) => (
                        <div
                            key={index}
                            className="bg-[#161C28] p-2 justify-between items-end rounded-lg shadow-md text-white flex flex-col md:flex-row gap-3"
                        >
                            <Image
                                src={company?.image}
                                alt={company?.name || 'logo'}
                                width={50}
                                height={50}
                                className=" mb-4 bg-white rounded-full w-[50px] h-[50px]"
                            />
                            <div className='flex flex-col gap-0 justify-center items-start'>
                                <h3 className="text-xl font-semibold">{company.name}</h3>
                                <p className="text-sm">
                                    {company?.description?.length > 150
                                        ? `${company.description.slice(0, 200)}...`
                                        : company.description}
                                </p>
                            </div>

                            <div className='flex flex-col justify-center items-center gap-2'>
                                <Button variant="destructive" onClick={() => company._id && onDeleteCompany(company._id)}>
                                    Delete
                                </Button>
                                <Button>Update</Button>
                            </div>
                        </div>
                    ))}
                </>
                :
                <h2>No Companies Found</h2>
            }

        </div>
    );
};

export default Companies;
