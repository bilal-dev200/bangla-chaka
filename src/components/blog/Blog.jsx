
"use client"
import { blogsApi } from '@/lib/api/blog';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { HiMenu, HiX } from "react-icons/hi";
import Catergories from './Catergories';
import { Image_URL } from '@/config/constants';
import TopPosts from './TopPosts';
import BlogBanner from './BlogBanner';
import Image from "next/image";
const carListings = [
  {
    id: 1,
    image: "./Images/blog1.PNG",
    slug: "cadillac-chevrolet-recall", // 👈 slug add kiya

    label: "Trade in : Nov.2022",
    heading: "90,000-Plus Cadillac, Chevrolet Vehicles Recalled...",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been..",
  },
  {
    id: 1,
    image: "./Images/blog1.PNG",
    label: "Trade in : Nov.2022",
    heading: "90,000-Plus Cadillac, Chevrolet Vehicles Recalled...",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been..",
  },
  {
    id: 1,
    image: "./Images/blog1.PNG",
    label: "Trade in : Nov.2022",
    heading: "90,000-Plus Cadillac, Chevrolet Vehicles Recalled...",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been..",
  },
  {
    id: 1,
    image: "./Images/blog1.PNG",
    label: "Trade in : Nov.2022",
    heading: "90,000-Plus Cadillac, Chevrolet Vehicles Recalled...",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been..",
  },
  {
    id: 1,
    image: "./Images/blog1.PNG",
    label: "Trade in : Nov.2022",
    heading: "90,000-Plus Cadillac, Chevrolet Vehicles Recalled...",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been..",
  },
  {
    id: 1,
    image: "./Images/blog1.PNG",
    label: "Trade in : Nov.2022",
    heading: "90,000-Plus Cadillac, Chevrolet Vehicles Recalled...",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been..",
  },
  {
    id: 1,
    image: "./Images/blog1.PNG",
    label: "Trade in : Nov.2022",
    heading: "90,000-Plus Cadillac, Chevrolet Vehicles Recalled...",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been..",
  },
  {
    id: 1,
    image: "./Images/blog1.PNG",
    label: "Trade in : Nov.2022",
    heading: "90,000-Plus Cadillac, Chevrolet Vehicles Recalled...",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been..",
  },
];

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [topPosts, setTopPosts] = useState([])
  const [banner, setBanner] = useState(null);


  useEffect(() => {
    blogsApi.getBlogCatergories().then((res) => {
      setCategories(res?.data || []);
    });
    blogsApi.getFilteredBlogs({
      search: search || undefined,
      categoryId: selectedCategory || undefined,
      page: currentPage,
      limit: 10,
    }).then((res) => {
      console.log("Filtered Blogs API Response 👉", res?.data);

      setBlogs(res?.data?.items || []);
      setTopPosts(res?.topPosts)
    });


  }, [search, selectedCategory, currentPage]);
  const router = useRouter();
  useEffect(() => {
    blogsApi.getBanner().then((res) => {
      if (res?.data?.length > 0) {
        const bannerData = res.data[0];

        const fixedImageUrl = bannerData.imageUrl.replace(/\\/g, "/");

        setBanner({
          ...bannerData,
          imageUrl: fixedImageUrl,
        });
      }
    });
  }, []);

  return (
    <div className="bg-white">
      <div className="flex flex-col md:flex-row">
        <div className="md:hidden flex justify-between items-center p-4">
          <button onClick={() => setSidebarOpen(true)}>
            <HiMenu className="text-2xl text-gray-800" />
          </button>
        </div>

        {sidebarOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-30 z-40" onClick={() => setSidebarOpen(false)}></div>
        )}
        <div
          className={`w-64 bg-white transform md:transform-none transition-transform duration-300 ease-in-out z-50 md:relative fixed top-0 left-0 h-full overflow-y-auto shadow-lg md:shadow-none ${sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
        >
          <div className="md:hidden flex justify-end p-4">
            <button onClick={() => setSidebarOpen(false)}>
              <HiX className="text-2xl text-gray-800" />
            </button>
          </div>

          <div className="mt-6 ml-6 relative w-52 mb-6">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}

              placeholder="Search categories..."
              className="pr-10 pl-3 py-3 w-full bg-gray-100 rounded-md text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <span className="absolute inset-y-0 right-3 flex items-center text-gray-500">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"
                />
              </svg>
            </span>
          </div>


          <div className="px-4 bg-gray-100 rounded-lg py-4 mx-auto w-52">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Categories</h2>
            <Catergories
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
          </div>
          <div className="px-4 py-4 bg-gray-100 rounded-lg mt-6 w-52 mx-auto">
            {/* <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Posts</h3>
            <ol className="space-y-3">
              {topPosts.map((post, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <span className="flex-shrink-0 w-6 h-6 text-black text-xs font-semibold rounded-full flex items-center justify-center">
                    {index + 1}
                  </span>
                  <span className="text-sm text-gray-600 leading-5">{post.title}</span>
                </li>
              ))}
            </ol> */}
            <TopPosts posts={topPosts} />
          </div>

          {/* <div className="px-4 pb-6 mt-3">
            <div className="relative h-96 w-full rounded-xl overflow-hidden">
              <img
                src={`${Image_URL}${banner?.imageUrl}`}
                alt={banner?.title || "Banner"}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex flex-col ml-10 mt-10">

                <h3 className="text-white font-bold text-2xl mb-1">{banner?.title || ""}</h3>
                <h3 className="text-white font-bold text-2xl ml-4">{banner?.description || ""}</h3>
              </div>
            </div>
          </div> */}
          <BlogBanner />
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {blogs.map((blog, index) => (
              <div
                key={index}
                onClick={() => router.push(`/blog/${blog.slug}`)}
                className="cursor-pointer flex flex-col h-full">
                {/* <div className="w-full">
                  <img
                    src={
                      `${Image_URL}${blog.thumbnail}` 
                    }
                    alt={blog.heading}
                    className="w-full h-68 rounded-[24px]"
                  />
                </div>
                <div className="p-4 space-y-2">
                  <p className="text-xs text-[#888888] font-medium uppercase tracking-wide">
                    Trade in : Nov.2022
                  </p>
                  <h3 className="text-lg font-semibold text-gray-900">{blog.title}</h3>
                  <p className="text-sm text-gray-600">{blog.content}</p>
                </div> */}
                <div className="w-full">
                  <Image
                    src={`${Image_URL}${blog.thumbnail}`}
                    alt={blog.title}
                    width={500}
                    height={300}
                    className="w-full h-72 object-cover rounded-[24px]"
                  />
                </div>
                <div className="p-4 space-y-2 flex-1 flex flex-col">
                  <p className="text-xs text-[#888888] font-medium uppercase tracking-wide">
                    Trade in : Nov.2022
                  </p>
                  <h3 className="text-lg font-semibold text-gray-900">{blog.title}</h3>
                  <p className="text-sm text-gray-600 line-clamp-3">{blog.content}</p>
                </div>
              </div>
            ))}

          </div>

          {/* Pagination */}
          {/* <div className="flex justify-center items-center space-x-2">
            {[1, 2, 3, 4].map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-10 h-10 rounded-lg text-sm font-medium transition-all ${currentPage === page
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-50 hover:border-gray-300"
                  }`}
              >
                {page}
              </button>
            ))}
          </div> */}
          <div className="flex justify-center items-center space-x-2">
            {[1, 2, 3, 4].map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-10 h-10 rounded-lg text-sm font-medium transition-all ${currentPage === page
                  ? "bg-[#EB0102] text-white shadow-md"
                  : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-50 hover:border-gray-300"
                  }`}
              >
                {page}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog