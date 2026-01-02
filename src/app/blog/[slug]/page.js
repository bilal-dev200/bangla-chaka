"use client";
import React, { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // hamburger & close icon
import FeaturedNews from "@/components/blog/FeaturedNews";
import Siderbar from "@/components/blog/Siderbar";
import Blogdetail from "@/components/blog/Blogdetail";
import { blogsApi } from "@/lib/api/blog";
import { useParams } from "next/navigation";

const Page = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [categories, setCategories] = useState([]);
    const [blog, setBlog] = useState(null);
  const [topPosts, setTopPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { slug } = useParams();


  useEffect(() => {
    if (!slug) return;

    blogsApi.getBlogBySlug(slug).then((res) => {
      setBlog(res.data);
      setTopPosts(res.topPosts);
      setLoading(false);
    });
  }, [slug]);



  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Mobile Top Bar with Hamburger */}
        <div className="flex items-center justify-between mb-4 lg:hidden">
          {/* <h2 className="text-xl font-bold">Blog Detail</h2> */}
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="text-2xl p-2"
          >
            <FiMenu />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Blog Detail always visible */}
          <Blogdetail blog={blog} />

          {/* Sidebar for large screens */}
          <div className="hidden lg:block">
            <Siderbar topPosts={topPosts} />
          </div>
        </div>
      </div>

      <FeaturedNews />

      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 lg:hidden">
          <div className="fixed top-0 right-0 w-3/4 max-w-sm h-full bg-white shadow-lg p-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold">Sidebar</h2>
              <button onClick={() => setIsSidebarOpen(false)}>
                <FiX size={24} />
              </button>
            </div>
            <Siderbar topPosts={topPosts}/>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
