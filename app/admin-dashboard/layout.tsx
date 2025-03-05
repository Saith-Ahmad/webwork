import AdminHeader from "@/app/admin-dashboard/componnets/AdminHeader";
import Sidebar from "@/app/admin-dashboard/componnets/Sidebar";
import { Poppins } from 'next/font/google';
const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    display: 'swap',
  });


export default function AdminLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className={` flex h-screen ${poppins.className}`}>
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <AdminHeader />
        <main className="flex-1 bg-[#FDFCF3] p-6 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
