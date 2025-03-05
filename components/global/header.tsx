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

function Header() {
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
    <header className="container py-2">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="md:w-[90px] md:h-[60px] w-[70px] h-[50px] relative">
          <Image src="/assets/logo.png" alt="Logo" fill className="object-contain" />
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
        <div className="hidden lg:block">
          <Link href={'/get-started'}>
            <Button className="hover:scale-105 transition-transform duration-300 ease-in-out transform">
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
                <Button className="w-full hover:scale-105 transition-transform duration-300 ease-in-out transform">
                  Get Started
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

export default Header;
