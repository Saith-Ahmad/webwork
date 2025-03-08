'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { useState } from 'react';

export default function Sidebar() {
  const pathname = usePathname(); // Get current path

  return (
    <div className='bg-[#161C28] '>
      {/* Hamburger Menu for Mobile */}
      <div className="md:hidden py-3 px-1 bg-[#161C28] ">
        <Sheet >
          <SheetTrigger asChild className='' >
            <Button variant="ghost" size="icon" >
              <Menu className="w-6 h-6 text-white"/>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0 bg-[#161C28] text-white">
            <aside className="w-64 flex flex-col rounded-r-sm py-6 p-3">
              <div className="py-4 text-center text-xl font-semibold border-b border-gray-700">
                Admin Dashboard
              </div>
              <nav className="flex-1 px-4 py-6 space-y-2">
                <Link
                  href="/admin-dashboard"
                  className={`block py-3 px-4 rounded-lg ${
                    pathname === '/admin-dashboard'
                      ? 'bg-gray-800'
                      : 'hover:bg-gray-800'
                  }`}
                >
                  Companies
                </Link>
                <Link
                  href="/admin-dashboard/jobs"
                  className={`block py-3 px-4 rounded-lg ${
                    pathname === '/admin-dashboard/jobs'
                      ? 'bg-gray-800'
                      : 'hover:bg-gray-800'
                  }`}
                >
                  Jobs
                </Link>
                
              </nav>
            </aside>
          </SheetContent>
        </Sheet>
      </div>

      {/* Sidebar for Desktop */}
      <aside className="hidden md:flex w-64 bg-[#161C28] text-white flex-col rounded-r-sm py-6 p-3 h-[100vh]">
        <div className="py-4 text-center text-xl font-semibold border-b border-gray-700">
          Admin Dashboard
        </div>
        <nav className="flex-1 px-4 py-6 space-y-2">
          <Link
            href="/admin-dashboard"
            className={`block py-4 px-4 rounded-lg ${
              pathname === '/admin-dashboard'
                ? 'bg-gray-800'
                : 'hover:bg-gray-800'
            }`}
          >
            Companies
          </Link>
          <Link
            href="/admin-dashboard/jobs"
            className={`block py-4 px-4 rounded-lg ${
              pathname === '/admin-dashboard/jobs'
                ? 'bg-gray-800'
                : 'hover:bg-gray-800'
            }`}
          >
            Jobs
          </Link>
        
        </nav>
      </aside>
    </div>
  );
}
