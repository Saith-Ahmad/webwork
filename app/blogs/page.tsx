import BlogsPage from '@/components/pages/Blog/BlogHome'
import BlogHero from '@/components/pages/Blog/BlogsHero'
import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Blogs | BeyondHut",
  description: "Read the latest insights on remote hiring, talent management, and business growth from BeyondHut experts.",
  alternates: {
    canonical: "https://beyondhut.com/blogs",
  },
  openGraph: {
    title: "Blogs | BeyondHut",
    description: "Read the latest insights on remote hiring, talent management, and business growth from BeyondHut experts.",
    url: "https://beyondhut.com/blogs",
  },
}
function page() {
  return (
    <div>
      <BlogHero />
      <BlogsPage />
    </div>
  )
}

export default page