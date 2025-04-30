// app/layout.tsx or app/RootLayout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localfont from "next/font/local"
import "./globals.css";
import Header from "@/components/global/header";
import Footer from "@/components/global/footer";
import { Toaster } from "sonner";
import { ClerkProvider } from "@clerk/nextjs";

const Roca = localfont(
  {
    src: [
      { path: '../public/fonts/rocabold.ttf', weight: "700" }, 
    ],
    variable: '--font-roca',
  }
);

// Load Inter font with all weights
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Beyondhut",
  description: "Top Choise for Remote Talent Hiring and Management",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.variable} ${Roca.variable} antialiased bg-[#F8F8F8]`}>
          <Header />
          <Toaster />
          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
