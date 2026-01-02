"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { blogsApi } from "@/lib/api/blog";
import { Image_URL } from "@/config/constants";

export default function NewsReviews() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await blogsApi.getAllBlog();
        if (response?.data) {
          // Take only the first 3 blogs
          setBlogs(response.data.slice(0, 3));
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <section className="w-full px-4 sm:px-6 md:px-14 py-10 bg-white">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/4 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2 mb-8"></div>
          <div className="grid gap-6 md:gap-4 sm:grid-cols-1 md:grid-cols-3">
            <div className="h-60 bg-gray-200 rounded-xl"></div>
            <div className="space-y-4 md:col-span-2 flex flex-col md:ml-[200px]">
              <div className="h-40 bg-gray-200 rounded-xl"></div>
              <div className="h-40 bg-gray-200 rounded-xl"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (blogs.length === 0) return null;

  const firstBlog = blogs[0];
  const sideBlogs = blogs.slice(1);

  return (
    <section className="w-full px-4 sm:px-6 md:px-14 py-10 bg-white">
      <header className="mb-8 text-center md:text-left">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-2">
          News, Reviews & More
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto md:mx-0 text-sm sm:text-base">
          Stay ahead in the automotive world with expert insights, buying
          guides, and maintenance tips.
        </p>
      </header>

      <div className="grid gap-6 md:gap-4 sm:grid-cols-1 md:grid-cols-3">
        {/* Left Large Image (First Blog) */}
        {firstBlog && (
          <Link href={`/blog/${firstBlog.slug}`} className="group relative rounded-xl overflow-hidden shadow-lg w-full md:w-[600px] block">
            <img
              src={firstBlog.media?.[0]?.url ? `${Image_URL}${firstBlog.media[0].url}` : "/Images/news1.png"}
              alt={firstBlog.title}
              className="w-full h-48 sm:h-60 md:h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/Images/news1.png";
              }}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 text-white font-semibold text-sm sm:text-base leading-snug">
              {firstBlog.title}
            </div>
          </Link>
        )}

        {/* Right Section (Side Blogs) */}
        <div className="space-y-4 md:col-span-2 flex flex-col md:ml-[200px] ml-0 mt-4 md:mt-0">
          {sideBlogs.map((blog, index) => (
            <Link href={`/blog/${blog.slug}`} key={blog.id || index} className="group relative block">
              <img
                src={blog.media?.[0]?.url ? `${Image_URL}${blog.media[0].url}` : index === 0 ? "/Images/news2.png" : "/Images/images3.jpg"}
                alt={blog.title}
                className="w-full md:w-[600px] h-40 sm:h-[170px] object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = index === 0 ? "/Images/news2.png" : "/Images/images3.jpg";
                }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent rounded-b-xl text-white font-semibold text-xs sm:text-sm leading-snug">
                {blog.title}
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-8 text-center">
        <Link
          href='/blog'
          className="inline-flex items-center gap-2 bg-[#EB0102] focus:ring-4 focus:ring-indigo-400 text-white text-sm font-semibold px-6 py-3 rounded-full transition"
        >
          See all news
        </Link>
      </div>
    </section>
  );
}
