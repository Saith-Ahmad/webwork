import { Inter } from "next/font/google";
import localfont from "next/font/local";
import "./globals.css";
import Header from "@/components/global/header";
import Footer from "@/components/global/footer";
import { Toaster } from "sonner";
import { ClerkProvider } from "@clerk/nextjs";
import Head from "next/head";
import Script from "next/script";
import { metadata } from "../lib/constants/constants";

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

        <body
          className={`${inter.variable} ${Roca.variable} ${RocaLight.variable} antialiased bg-white`}
        >
          <Header />
          <Toaster />
          {children}
          <Footer />
        </body> 
      </html>
    </ClerkProvider>
  );
}
