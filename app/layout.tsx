import { Inter } from "next/font/google";
import localfont from "next/font/local";
import "./globals.css";
import Header from "@/components/global/header";
import Footer from "@/components/global/footer";
import { Toaster } from "sonner";
import { ClerkProvider } from "@clerk/nextjs";
import Head from "next/head";
import Script from "next/script";
import { metadata } from "./metadata";
import CookieBanner from "@/components/global/CookieBanner";


const Roca = localfont({
  src: [{ path: "../public/fonts/rocabold.ttf", weight: "700" }],
  variable: "--font-roca",
});

const RocaLight = localfont({
  src: [{ path: "../public/fonts/rocathin.ttf", weight: "800" }],
  variable: "--font-rocathin",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export { metadata };

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
          <meta name="format-detection" content="telephone=no" />
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              src="https://www.facebook.com/tr?id=620853677086027&ev=PageView&noscript=1"
              alt="Meta Pixel"
            />
          </noscript>
        </Head>

        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function()
            {n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window,document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '620853677086027');
            fbq('track', 'PageView');
          `}
        </Script>

        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "BeyondHut",
              "url": "https://beyondhut.com",
              "logo": "https://beyondhut.com/logo.png",
              "description": "Top Choice for Remote Talent Hiring and Management. Build Your Dream Team With The Best Talent And Management Hassle Free.",
              "foundingDate": "2024",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "GB"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+44 7929 374500",
                "contactType": "customer service",
                "email": "info@beyondhut.com"
              },
              "sameAs": [
                "https://beyondhut.com"
              ],
              "serviceType": [
                "Remote Talent Hiring",
                "Talent Management",
                "Recruitment Services",
                "Business Staffing Solutions"
              ]
            })
          }}
        />

        <body
          className={`${inter.variable} ${Roca.variable} ${RocaLight.variable} antialiased bg-white`}
        >
          <Header />
          <Toaster />
          {children}
           <CookieBanner />
          <Footer />
        </body> 
      </html>
    </ClerkProvider>
  );
}
