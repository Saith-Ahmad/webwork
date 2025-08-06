
// "use client";

// import React, { useEffect, useState } from "react";
// import { useParams } from "next/navigation";
// import { Skeleton } from "@/components/ui/skeleton";
// import Link from "next/link";
// import Head from "next/head";

// const SingleBlogPage = () => {
//     const { slug } = useParams();

//     const [post, setPost] = useState<any>(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState("");
//     const [relatedPosts, setRelatedPosts] = useState<any[]>([]);
//     const [categories, setCategories] = useState<any[]>([]);

//     // Fetch Single Blog + Related
//     useEffect(() => {
//         const fetchPost = async () => {
//             try {
//                 setLoading(true);

//                 // 1. Get the blog post by slug
//                 const res = await fetch(
//                     `${process.env.NEXT_PUBLIC_BASE_BLOG_URL}/posts?slug=${slug}&_embed`
//                 );
//                 const data = await res.json();

//                 if (data.length === 0) {
//                     setError("Blog not found.");
//                     return;
//                 }

//                 setPost(data[0]);
//                 setError("");

//                 // 2. Fetch related blogs
//                 const relatedRes = await fetch(
//                     `${process.env.NEXT_PUBLIC_BASE_BLOG_URL}/posts?per_page=5&_embed`
//                 );
//                 const relatedData = await relatedRes.json();
//                 setRelatedPosts(relatedData.filter((p: any) => p.id !== data[0].id));

//             } catch (err) {
//                 setError("Failed to load blog.");
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchPost();
//     }, [slug]);

//     // Fetch categories
//     useEffect(() => {
//         const fetchCategories = async () => {
//             try {
//                 const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_BLOG_URL}/categories`);
//                 const data = await res.json();
//                 setCategories(data);
//             } catch (err) {
//                 console.error("Failed to load categories");
//             }
//         };

//         fetchCategories();
//     }, []);

//     // Helper: Get post's first category name
//     function getCategoryName(post: any) {
//         if (!post.categories || post.categories.length === 0) return "Uncategorized";
//         const firstCategoryId = post.categories[0];
//         const category = categories.find((cat) => cat.id === firstCategoryId);
//         return category ? category.name : "Uncategorized";
//     }

//     if (loading) {
//         return (
//             <div className="container py-10 min-h-[80vh]">
//                 <Skeleton className="h-80 w-full mb-6 bg-gray-500" />
//                 <Skeleton className="h-10 w-[60%] mb-4 bg-gray-500" />
//                 <Skeleton className="h-6 w-[40%] mb-6 bg-gray-500" />
//                 <Skeleton className="h-96 w-full bg-gray-500" />
//             </div>
//         );
//     }

//     if (error) {
//         return (
//             <div className="container py-10 min-h-[80vh]">
//                 <h2 className="text-red-900 mb-4 text-2xl mt-5 font-bold font-roca text-center">{error}</h2>
//             </div>
//         );
//     }

//     return (
//         <>
//             <Head>
//                 <title>{post.title.rendered} | BeyondHut</title>
//                 <meta name="description" content={stripHtml(post.content.rendered).substring(0, 160)} />
//                 <link rel="canonical" href={`https://beyondhut.com/blogs/${slug}`} />
//                 <meta property="og:title" content={post.title.rendered} />
//                 <meta property="og:description" content={stripHtml(post.content.rendered).substring(0, 160)} />
//                 <meta property="og:url" content={`https://beyondhut.com/blogs/${slug}`} />
//                 <meta property="og:type" content="article" />
//                 {post._embedded?.["wp:featuredmedia"]?.[0]?.source_url && (
//                     <meta property="og:image" content={post._embedded["wp:featuredmedia"][0].source_url} />
//                 )}
//                 <meta name="twitter:card" content="summary_large_image" />
//                 <meta name="twitter:title" content={post.title.rendered} />
//                 <meta name="twitter:description" content={stripHtml(post.content.rendered).substring(0, 160)} />
//                 {post._embedded?.["wp:featuredmedia"]?.[0]?.source_url && (
//                     <meta name="twitter:image" content={post._embedded["wp:featuredmedia"][0].source_url} />
//                 )}
//             </Head>
//             <div className="container py-10 min-h-[80vh] grid grid-cols-1 lg:grid-cols-3 gap-10">
//             {/* Main Content */}
//             <div className="md:col-span-2">
//                 {/* Hero Image */}
//                 {post._embedded?.["wp:featuredmedia"]?.[0]?.source_url && (
//                     <img
//                         src={post._embedded["wp:featuredmedia"][0].source_url}
//                         alt={post.title.rendered}
//                         className="w-full md:max-h-96 object-cover bg-bottom rounded-lg mb-6 shadow-md min-h-72"
//                     />
//                 )}



//                 {/* Author + Date + Category */}
//                 <div className="flex items-center gap-3 mb-2 p-2 rounded-md ">
//                     {post._embedded?.author?.[0]?.avatar_urls?.["48"] && (
//                         <img
//                             src={post._embedded.author[0].avatar_urls["48"]}
//                             alt={post._embedded.author[0].name}
//                             className="w-10 h-10 rounded-full"
//                         />
//                     )}
//                     <div className="">
//                         <div className="flex justify-start items-center gap-2">
//                             <p className="text-base font-medium font-roca capitalize">{post._embedded.author[0].name}</p>
//                             <p className="text-xs text-gray-500 mt-1">{new Date(post.date).toLocaleDateString()}</p>
//                         </div>
//                         <p className="capitalize text-sm  font-roca text-gray-600">Category : {getCategoryName(post)}</p>
//                     </div>
//                 </div>

//                 {/* Title */}
//                 <h1 className="text-2xl font-roca md:text-4xl font-bold mb-6">{post.title.rendered}</h1>

//                 {/* Full Blog Content */}
//                 <div
//                     className="prose max-w-none p-1 
//     prose-headings:font-roca 
//     prose-li:font-rocathin prose-li:text-gray-800 prose-li:text-lg prose-li:md:text-xl 
//     prose-p:text-lg prose-p:md:text-xl prose-p:text-gray-500 
//     prose-img:w-full prose-img:rounded-lg prose-img:object-cover 
//     prose-h1:text-3xl prose-h1:md:text-5xl 
//     prose-h2:text-2xl prose-h2:md:text-4xl 
//     prose-h3:text-xl prose-h3:md:text-3xl 
//     prose-h4:text-xl prose-h4:md:text-2xl 
//     prose-h5:text-lg prose-h5:md:text-xl
//      prose-em:font-roca prose-em:text-xl
//      prose-hr:mt-4 prose-hr:mb-4
//    "
//                     dangerouslySetInnerHTML={{ __html: post.content.rendered }}
//                 />

//             </div>

//             {/* Sidebar */}
//             <div className="md:col-span-1">
//                 <h2 className="text-2xl font-semibold mb-4 font-roca">{relatedPosts.length >= 1 ? "Sililar Blogs" : ""}</h2>
//                 <div className="flex flex-col gap-4">
//                     {relatedPosts.map((related) => (
//                         <Link
//                             key={related.id}
//                             href={`/blogs/${related.slug}`}
//                             className=" flex gap-3 items-center bg-white p-3 shadow-md hover:shadow-md rounded-md cursor-pointer transform-3d "
//                         >
//                             {/* Thumbnail */}
//                             {related._embedded?.["wp:featuredmedia"]?.[0]?.source_url && (
//                                 <img
//                                     src={related._embedded["wp:featuredmedia"][0].source_url}
//                                     alt={related.title.rendered}
//                                     className="w-32 h-20 object-cover rounded"
//                                 />
//                             )}
//                             <div>
//                                 <h3 className="font-medium text-base font-roca">
//                                     {truncate(related.title.rendered, 35)}
//                                 </h3>
//                                 <p className="text-sm text-gray-500 line-clamp-3">
//                                     {truncateWords(stripHtml(related.content.rendered), 5)}
//                                 </p>
//                             </div>
//                         </Link>
//                     ))}
//                 </div>
//             </div>
//         </div>
//         </>
//     );
// };

// export default SingleBlogPage;

// // Helper: truncate text
// function truncate(str: string, max: number) {
//     return str.length > max ? str.substring(0, max) + "..." : str;
// }

// // Helper: Strip HTML tags from content
// function stripHtml(html: string) {
//     return html.replace(/<[^>]+>/g, "");
// }

// // Helper: Truncate to N words
// function truncateWords(str: string, wordLimit: number) {
//     return str.split(/\s+/).slice(0, wordLimit).join(" ") + "...";
// }
