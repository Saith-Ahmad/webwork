import { Check, Circle, CircleMinus, X } from 'lucide-react'
import React from 'react'

function TalentReplacement() {
  return (
    <div className='bg-[#F6F6F6] py-10 my-10'>
        <div className='container'>
            <div className='flex flex-col justify-center items-center gap-2'>

                <h2 className="font-roca text-2xl md:text-4xl font-thin text-center">Talent Placement Roles We Fill</h2>
                <p className='mt-1 text-center  text-lg text-[#516371]'>Hire for any key role without the hiring Hassle</p>


                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-3'>
                    <div className='bg-white min-h-[250px] flex flex-col min-w-[250px] p-5 rounded-xl border-4 border-[#C6C6C6]'>
                        <h4 className='text-xl font-roca mb-4'>Property Management</h4>
                        <ul className='text-[#616161] flex flex-col justify-start items-start gap-2 list-disc custom-list p-2'>
                            <li >Free up your agents to focus on deals, not paperwork</li>
                            <li >Handle scheduling, CRM updates, listing uploads, inboxes & data management</li>
                        </ul>
                    </div>


                   




                    <div className='bg-white min-h-[250px] flex flex-col min-w-[250px] p-5 rounded-xl border-4 border-[#C6C6C6]'>
                        <h4 className='text-xl font-roca mb-4'>Tenant support</h4>
                        <ul className='text-[#616161] flex flex-col justify-start items-start gap-2 list-disc custom-list p-2'>
                            <li>Deliver a better tenant experience</li>
                            <li>Answer tenant queries, book viewings, and maintain communication logs</li>
                            <li>Keep your management team moving efficiently</li>
                            <li>Coordinate inspections, handle certificates & renewals</li>
                            </ul>
                    </div>




                    <div className='bg-white min-h-[250px] flex flex-col min-w-[250px] p-5 rounded-xl border-4 border-[#C6C6C6]'>
                        <h4 className='text-xl font-roca mb-4'>Lettings Assistants</h4>
                        <ul className='text-[#616161] flex flex-col justify-start items-start gap-2 list-disc custom-list p-2'>
                            <li>Keep your pipeline moving without slowing</li>
                            <li>Prep tenancy agreements, chase document, and update listings</li>
                        </ul>
                    </div>


                      <div className='bg-white min-h-[250px] flex flex-col min-w-[250px] p-5 rounded-xl border-4 border-[#C6C6C6]'>
                        <h4 className='text-xl font-roca mb-4'>Accountants</h4>
                        <ul className='text-[#616161] flex flex-col justify-start items-start gap-2 list-disc custom-list p-2'>
                            <li>Stay compliant, on time, and in control of your numbers</li>
                            <li>Invoice clients, track payments, manage cash flow, chase arrears</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TalentReplacement