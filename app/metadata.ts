

// app/metadata.ts
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL('https://beyondhut.com'),
  title: {
    default: `BeyondHut - Top Choice for Remote Talent Hiring and Management`,
    template: `%s | BeyondHut`,
  },
  description: "Build Your Dream Team With The Best Talent And Management Hassle Free. BeyondHut helps businesses scale with cost-effective top-tier talent vetted, trained and ready to plug into your team.",
  keywords: [
    "remote hiring",
    "tech talent",
    "beyondhut",
    "beyond hut",
    "remote jobs",
    "software engineers hiring",
    "Top-tier talent",
    "Hire remote teams",
    "Recruitment services",
    "Talent acquisition",
    "Business staffing solutions",
    "Cost-effective hiring",
    "Team management support",
    "Job placement services",
    "Vetted professionals",
    "Build your dream team",
    "remote workforce",
    "virtual team",
    "offshore hiring",
    "talent management"
  ],
  authors: [{ name: "BeyondHut" }],
  creator: "BeyondHut",
  publisher: "BeyondHut",
  verification: {
    google: "9OJmvbrN5TpSQo-bvh3WbY5VTd5PAW3zds6fJP571oA",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: {
      default: "BeyondHut - Top Choice for Remote Talent Hiring and Management",
      template: `%s | BeyondHut`,
    },
    description: "Build Your Dream Team With The Best Talent And Management Hassle Free. BeyondHut helps businesses scale with cost-effective top-tier talent vetted, trained and ready to plug into your team.",
    url: "https://beyondhut.com",
    siteName: "BeyondHut",
    images: [
      {
        url: "https://beyondhut.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "BeyondHut - Remote Talent Hiring and Management",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BeyondHut - Top Choice for Remote Talent Hiring and Management",
    description: "Build Your Dream Team With The Best Talent And Management Hassle Free. BeyondHut helps businesses scale with cost-effective top-tier talent vetted, trained and ready to plug into your team.",
    images: ["https://beyondhut.com/og-image.png"],
    creator: "@beyondhut",
  },
  alternates: {
    canonical: "https://beyondhut.com",
  },
  category: "business",
  classification: "business",

};


