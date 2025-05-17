"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "../ui/button";
import { navLinks } from "@/lib/constants/constants";
import { Menu } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { SignOutButton, UserButton, useUser } from "@clerk/nextjs";

function Header() {
  const { user } = useUser();
  const pathname = usePathname();
  if (pathname === '/get-started' || pathname === '/application-form' || pathname.startsWith('/admin-dashboard')) {
    return null;  // Don't render anything
  }
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false); // State to control sheet

  const handleNavigation = (url: string) => {
    setIsOpen(false); // Close the Sheet
    router.push(url); // Navigate to new page
  };

  return (
    <div className="container">
    <header className=" py-2 bg-white my-5 md:my-7 lg:my-8 rounded-3xl shadow-lg shadow-gray-200 px-10">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="md:w-[150px] w-[100px] md:min-h-[50px] min-h-[40px] relative">
          <Link href={'/'} className="flex justify-center items-center">
            <Image src="/assets/new/logo.png" alt="Logo" fill className="object-contain"/>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex flex-row justify-center items-center gap-5">
          {navLinks.map((link, index) => (
            <Link href={link.url} key={index}>
              <li
                className={`font-normal hover:scale-105 hover:text-gray-600 transition-all duration-300 ease-in-out transform ${pathname === link.url ? "text-black font-semibold" : "text-[#A6A6A6]"
                  }`}
              >
                {link.name}
              </li>
            </Link>
          ))}
        </ul>

        {/* Get Started Button (Desktop Only) */}
        <div className="hidden lg:flex justify-center items-center  gap-2">
          <UserButton />
          <Link href={'/get-started'} >
            <Button size={'lg'} className="hover:scale-105 rounded-full transition-transform duration-300 ease-in-out transform">
              Get Started
            </Button>
          </Link> 
        </div>

        {/* Mobile & Tablet: Hamburger Menu */}
        <div className="lg:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger>
              <Menu className="w-8 h-8 cursor-pointer text-gray-700" />
            </SheetTrigger>
            <SheetContent side="right" className="p-2">
              {/* Nav Links inside Sheet */}
              <nav className="flex flex-col justify-center space-y-7 mt-10">
                {navLinks.map((link, index) => (
                  <button
                    key={index}
                    onClick={() => handleNavigation(link.url)}
                    className={`text-lg font-medium transition-all duration-300 ease-in-out transform hover:scale-105 ${pathname === link.url ? "text-black font-semibold" : "text-gray-600"
                      }`}
                  >
                    {link.name}
                  </button>
                ))}
              </nav>

              {/* Get Started Button in Sheet */}
              <div className="mt-6">
                <Link href="/get-started">
                  <Button className="w-full hover:scale-105 transition-transform duration-300 ease-in-out transform">
                    Get Started
                  </Button>
                </Link>

                {user && <>
                  <SignOutButton>
                    <button className="font-bold w-full mt-3 p-2 rounded-md bg-gray-900 text-white">
                      Logout
                    </button>
                  </SignOutButton>
                </>}

              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
    </div>
  );
}

export default Header;
