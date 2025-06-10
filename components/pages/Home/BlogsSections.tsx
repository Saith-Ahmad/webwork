
"use client";
import React, { useEffect, useState, useMemo } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { timeAgo } from "@/lib/constants/constants";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const BlogsSection = () => {
    const router = useRouter();
    const [posts, setPosts] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");


    // Fetch posts
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                setLoading(true);
                const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_BLOG_URL}/posts?per_page=100&_embed`);
                const data = await res.json();
                setPosts(data);
                setError("");
            } catch (err) {
                setError("Failed to load blogs");
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

  
    return (
        <div className="container py-10">
            <h2 className="text-2xl md:text-4xl mt-5 font-bold mb-10 font-roca text-center capitalize ">Read latest <span className="text-[#65CEEC]">blog and articles</span></h2>

            {/* Error */}
            {error && <p className="text-red-900 mb-4 text-2xl mt-5 font-bold font-roca text-center">{error}</p>}

            {/* Loading */}
            {loading ? (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                    {Array.from({ length: 3 }).map((_, i) => (
                        <div key={i} className="flex flex-col gap-1">
                            <Skeleton className="h-64 bg-gray-500" />
                            <Skeleton className="h-8 w-[80%] bg-gray-500" />
                            <Skeleton className="h-3 w-[50%] bg-gray-500" />
                        </div>
                    ))}
                </div>
            ) : posts.length === 0 ? (
                <h2 className="font-roca text-xl md:text-3xl text-center mt-10">No results found.</h2>
            ) : (
                <>
                    {/* Blogs */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {posts.slice(0,3).map((post) => (
                            <Card
                                key={post.id}
                                className="shadow-lg p-0 border-[2px] border-[#D8DBDF] border-dashed overflow-hidden shadow-gray-100 transform-3d cursor-pointer flex flex-col h-full"
                                onClick={() => router.push(`/blogs/${post.slug}`)}
                                style={{
                                    borderBottomStyle: "solid",
                                }}
                            >

                                <CardContent className="p-0 flex-1 flex flex-col">
                                    {/* Image */}
                                    {post._embedded?.["wp:featuredmedia"]?.[0]?.source_url && (
                                        <div className="relative w-full min-h-[200px] md:h-[250px] mb-4 overflow-hidden">
                                            <Image
                                                src={post._embedded["wp:featuredmedia"][0].source_url}
                                                alt={post.title.rendered}
                                                layout="fill"
                                                objectFit="cover"
                                                placeholder="blur"
                                                objectPosition="center"
                                                blurDataURL="/assets/new/placeholder.jpg"
                                            />
                                        </div>
                                    )}

                                    {/* Text content */}
                                    <div className="flex flex-col flex-1 px-3 py-2 gap-3">
                                        <h2 className="font-semibold text-xl font-roca">
                                            {truncate(post.title.rendered, 50)}
                                        </h2>                                        
                                        <p className="text-sm text-gray-500 mt-auto border-t-2 border-dashed border-t-[#D8DBDF] pt-2">
                                             {timeAgo(post.date)}
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>

                        ))}
                    </div>
                    <div className="flex justify-center mt-10">
                        <Link href={'/blogs'}>
                            <Button size={'lg'} className="bg-black hover:bg-gray-800">View All</Button>
                        </Link>
                    </div>
                </>
            )}
        </div>
    );
};

export default BlogsSection;


// Truncate text
function truncate(str: string, max: number) {
    return str.length > max ? str.substring(0, max) + "..." : str;
}

// Remove HTML tags
function stripHtml(html: string) {
    return html.replace(/<[^>]+>/g, "");
}
