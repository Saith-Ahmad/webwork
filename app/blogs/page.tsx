import BlogsPage from '@/components/pages/Blog/BlogHome'
import BlogHero from '@/components/pages/Blog/BlogsHero'
import React from 'react'
export const metadata = {
  title: "Blogs",
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