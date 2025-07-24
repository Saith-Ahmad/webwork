

// app/metadata.ts
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
     default: `Beyondhut`,
      template: `%s | Beyondhut`,
  },
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
    google: "9OJmvbrN5TpSQo-bvh3WbY5VTd5PAW3zds6fJP571oA",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: {
     default: "Beyondhut",
      template: `%s | Beyondhut`,
    },
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


