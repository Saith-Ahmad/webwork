"use client";

import React, { useEffect, useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const BlogsPage = () => {
    const router = useRouter();
    const [posts, setPosts] = useState<any[]>([]);
    const [categories, setCategories] = useState<any[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string>("");
    const [sortOrder, setSortOrder] = useState("desc");
    const [searchTerm, setSearchTerm] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    // Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 10;

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
        if (selectedCategory && selectedCategory !== "all") {
            filtered = filtered.filter((post) =>
                post.categories.includes(parseInt(selectedCategory))
            );
        }

        // Search filter
        if (debouncedSearchTerm) {
            filtered = filtered.filter((post) => {
                const titleMatch = post.title.rendered
                    .toLowerCase()
                    .includes(debouncedSearchTerm.toLowerCase());

                const categoryMatch = categories
                    .filter((cat) => post.categories.includes(cat.id))
                    .some((cat) =>
                        cat.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
                    );

                return titleMatch || categoryMatch;
            });
        }

        // Sort
        filtered.sort((a, b) => {
            const dateA = new Date(a.date).getTime();
            const dateB = new Date(b.date).getTime();
            return sortOrder === "desc" ? dateB - dateA : dateA - dateB;
        });

        return filtered;
    }, [posts, selectedCategory, sortOrder, debouncedSearchTerm, categories]);

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
        <div className="container py-10 min-h-[80vh]">
            <h2 className="text-2xl md:text-4xl mt-5 font-bold mb-6 font-roca text-center">Explore the Latest Blogs</h2>

            {/* Filters */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                {/* Category Filter */}
                <div className="grid-cols-1">
                    <Select onValueChange={(val) => setSelectedCategory(val)}>
                        <SelectTrigger className="w-full py-[25px] text-lg text-gray-500 font-rocathin shadow-md shadow-gray-200">
                            <SelectValue placeholder="Filter by Category" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all" className="px-4 py-2 text-base text-gray-500 font-rocathin">All</SelectItem>
                            {categories.map((cat) => (
                                <SelectItem className="capitalize px-4 py-2 text-base text-gray-500 font-rocathin" key={cat.id} value={cat.id.toString()}>
                                    {cat.name}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>

                {/* Sort Filter */}
                <div className="col-span-1">
                    <Select onValueChange={(val) => setSortOrder(val)} defaultValue="desc">
                        <SelectTrigger className="w-full py-[25px] text-lg text-gray-500 font-rocathin shadow-md shadow-gray-200">
                            <SelectValue placeholder="Sort" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="desc" className="px-4 py-2 text-base text-gray-500 font-rocathin">Latest</SelectItem>
                            <SelectItem value="asc" className="px-4 py-2 text-base text-gray-500 font-rocathin">Oldest</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                {/* Search */}
                <div className="w-full col-span-1 md:col-span-2 h-[60px] flex flex-row justify-center items-center gap-3 border-[1px] border-gray-200 px-5 py-2 rounded-lg shadow-md shadow-gray-200">
                    <Search />
                    <input
                        placeholder="Search Your Favourite Blogs"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full font-rocathin h-full border-none outline-none text-lg focus:outline-none focus:border-none focus:ring-0 focus:shadow-none bg-transparent"
                    />
                </div>
            </div>

            {/* Error */}
            {error && <p className="text-red-900 mb-4 text-2xl mt-5 font-bold font-roca text-center">{error}</p>}

            {/* Loading */}
            {loading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
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
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {paginatedPosts.map((post) => (
                            <Card key={post.id} className="shadow-lg shadow-gray-100 transform-3d cursor-pointer" onClick={() => router.push(`/blogs/${post.slug}`)}>
                                <CardContent className="p-4">
                                    {/* Image */}
                                    {post._embedded?.["wp:featuredmedia"]?.[0]?.source_url && (
                                        <div className="relative w-full min-h-[200px] md:h-[300px] mb-4 rounded-md overflow-hidden">
                                            <Image
                                                src={post._embedded["wp:featuredmedia"][0].source_url}
                                                alt={post.title.rendered}
                                                layout="fill"
                                                objectFit="cover"
                                                className="rounded-md"
                                                placeholder="blur"
                                                 objectPosition="center"
                                                blurDataURL="/assets/new/placeholder.jpg"
                                            />
                                        </div>
                                    )}

                                    {/* Date + Time */}
                                    <p className="text-sm text-gray-500 mb-1">
                                        {new Date(post.date).toLocaleDateString()}
                                    </p>

                                    {/* Title */}
                                    <h2 className="font-semibold text-lg font-roca">
                                        {truncate(post.title.rendered, 60)}
                                    </h2>

                                    {/* Excerpt */}
                                    <p className="text-gray-600 text-base">
                                        {truncate(stripHtml(post.excerpt.rendered), 150)}
                                    </p>
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
