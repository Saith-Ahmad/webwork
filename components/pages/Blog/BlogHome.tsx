
"use client";
import React, { useEffect, useState, useMemo } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { timeAgo } from "@/lib/constants/constants";

const BlogsPage = () => {
    const router = useRouter();
    const [posts, setPosts] = useState<any[]>([]);
    const [categories, setCategories] = useState<any[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<number[]>([]);
    const [sortOrder, setSortOrder] = useState("desc");
    const [searchTerm, setSearchTerm] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    // Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 12;

    // Debounce search term
    const debouncedSearchTerm = useDebounce(searchTerm, 500);

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

    // Fetch categories
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_BLOG_URL}/categories`);
                const data = await res.json();
                setCategories(data);
            } catch (err) {
                console.error("Failed to load categories");
            }
        };

        fetchCategories();
    }, []);

    // Filtered and sorted posts
    const filteredPosts = useMemo(() => {
        let filtered = [...posts];

        // Category filter
        if (selectedCategory.length > 0) {
            filtered = filtered.filter((post) =>
                selectedCategory.some((catId) => post.categories.includes(catId))
            );
        }


        return filtered;
    }, [posts, selectedCategory, categories]);

    // Reset to page 1 when filters change
    useEffect(() => {
        setCurrentPage(1);
    }, [selectedCategory, sortOrder, debouncedSearchTerm]);

    // Pagination
    const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

    const paginatedPosts = useMemo(() => {
        const start = (currentPage - 1) * postsPerPage;
        return filteredPosts.slice(start, start + postsPerPage);
    }, [filteredPosts, currentPage]);

    return (
        <div className="container py-10 min-h-[50vh]">
            <h2 className="text-2xl md:text-4xl mt-5 font-bold mb-6 font-roca text-center">Explore the Latest Blogs</h2>

            {/* Filters */}
            <div className="flex justify-start items-center">
                {/* Category Filter Buttons */}
                <div className="flex flex-wrap justify-start gap-2 mb-6 mt-6">
                    <button
                        className={`px-6 py-2 rounded-full text-sm border font-medium transition ${selectedCategory.length === 0
                            ? "bg-sky-400 text-white"
                            : "bg-white text-black border-gray-300"
                            }`}
                        onClick={() => setSelectedCategory([])}
                    >
                        All
                    </button>
                    {categories.map((cat) => {
                        const isSelected = selectedCategory.includes(cat.id);
                        return (
                            <button
                                key={cat.id}
                                onClick={() => {
                                    setSelectedCategory((prev) =>
                                        prev.includes(cat.id)
                                            ? prev.filter((id) => id !== cat.id)
                                            : [...prev, cat.id]
                                    );
                                }}
                                className={`px-5 md:py-3 py-2 rounded-full text-sm border font-medium transition capitalize ${isSelected
                                    ? "bg-sky-400 text-white"
                                    : "bg-white text-black border-gray-300"
                                    }`}
                            >
                                {cat.name}
                            </button>
                        );
                    })}
                </div>

            </div>

            {/* Error */}
            {error && <p className="text-red-900 mb-4 text-2xl mt-5 font-bold font-roca text-center">{error}</p>}

            {/* Loading */}
            {loading ? (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                    {Array.from({ length: 6 }).map((_, i) => (
                        <div key={i} className="flex flex-col gap-1">
                            <Skeleton className="h-64 bg-gray-500" />
                            <Skeleton className="h-8 w-[80%] bg-gray-500" />
                            <Skeleton className="h-3 w-[50%] bg-gray-500" />
                        </div>
                    ))}
                </div>
            ) : filteredPosts.length === 0 ? (
                <h2 className="font-roca text-xl md:text-3xl text-center mt-10">No results found.</h2>
            ) : (
                <>
                    {/* Blogs */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-1">
                        {paginatedPosts.map((post) => (
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
                                    <div className="flex flex-col flex-1 px-3 py-2">
                                        <h2 className="font-semibold text-xl font-roca mb-4">
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
                    {/* Pagination */}
                    {totalPages > 1 && (
                        <div className="flex justify-center mt-8 gap-2">
                            <button
                                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                                disabled={currentPage === 1}
                                className="px-4 py-2 border rounded disabled:opacity-50"
                            >
                                Prev
                            </button>
                            {Array.from({ length: totalPages }, (_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrentPage(i + 1)}
                                    className={`px-4 py-2 border rounded ${currentPage === i + 1 ? "bg-black text-white" : ""}`}
                                >
                                    {i + 1}
                                </button>
                            ))}
                            <button
                                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                                disabled={currentPage === totalPages}
                                className="px-4 py-2 border rounded disabled:opacity-50"
                            >
                                Next
                            </button>
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default BlogsPage;

// Debounce hook
function useDebounce(value: string, delay: number) {
    const [debounced, setDebounced] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebounced(value);
        }, delay);

        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);

    return debounced;
}

// Truncate text
function truncate(str: string, max: number) {
    return str.length > max ? str.substring(0, max) + "..." : str;
}

// Remove HTML tags
function stripHtml(html: string) {
    return html.replace(/<[^>]+>/g, "");
}
