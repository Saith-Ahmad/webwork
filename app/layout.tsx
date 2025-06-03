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

const RocaLight = localfont(
  {
    src: [
      { path: '../public/fonts/rocathin.ttf', weight: "800" }, 
    ],
    variable: '--font-rocathin',
  }
);

// Load Inter font with all weights
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

//   title: "Beyondhut",
//   description: "Top Choise for Remote Talent Hiring and Management",
//   verification:{
//     google : '9OJmvbrN5TpSQo-bvh3WbY5VTd5PAW3zds6fJP571oA'
//   }
// };

export const metadata: Metadata = {
  title: "Beyondhut",
  description: "Top Choice for Remote Talent Hiring and Management",
  keywords: [
    "remote hiring",
    "remote developers",
    "hire developers",
    "hire remote team",
    "tech talent",
    "beyondhut",
    "remote jobs",
    "software engineers hiring",
  ],
  verification: {
    google: "9OJmvbrN5TpSQo-bvh3WbY5VTd5PAW3zds6fJP571oA", // ✅ Google site verification
  },
  openGraph: {
    title: "Beyondhut",
    description: "Top Choice for Remote Talent Hiring and Management",
    url: "https://beyondhut.com",
    siteName: "Beyondhut",
    images: [
      {
        url: "https://beyondhut.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Beyondhut Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Beyondhut",
    description: "Top Choice for Remote Talent Hiring and Management",
    images: ["https://beyondhut.com/og-image.png"],
  },
  alternates: {
    canonical: "https://beyondhut.com",
  },
};




export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.variable} ${Roca.variable} ${RocaLight.variable} antialiased bg-white`}>
          <Header />
          <Toaster />
          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
