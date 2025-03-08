'use client';

import { UserButton, useUser, SignOutButton } from '@clerk/nextjs';

export default function AdminHeader() {
  // Get user information
  const { user } = useUser();

  return (
    <header className="container px-10 bg-gray-100 shadow-md shadow-black p-4 flex items-center justify-between">
      <h1 className="text-xl font-semibold">
        Hi {user?.firstName || 'Guest'}
      </h1>
      <div className="flex items-center gap-4">
        <UserButton afterSignOutUrl="/" /> {/* Displays profile button with sign-out option */}
        <SignOutButton>
          <button className="font-bold text-gray-600 hover:text-black">
            Logout
          </button>
        </SignOutButton>
      </div>
    </header>
  );
}
