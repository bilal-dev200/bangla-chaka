import { blogsApi } from '@/lib/api/blog';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import Catergories from './Catergories';
import BlogBanner from './BlogBanner';
const topPosts = [
  "10,000 Plus Cadillac Chevrolet Vehicles Recalled...",
  "New Electric Vehicle Models Released This Quarter",
  "Automotive Industry Trends and Analysis",
  "Best Car Deals This Month - Don't Miss Out",
  "Safety Features Every Car Buyer Should Know",
];

const Siderbar = ({ topPosts }) => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    blogsApi.getBlogCatergories().then((res) => {
      setCategories(res?.data || []); // 👈 api response ke hisab se set karna
    });
  }, []);

  return (
    <aside className="w-full lg:w-72 sticky top-4 h-fit">
      {/* <div className="mb-6">
        <input
          type="text"
          placeholder="Search categories..."
          className="pr-10 pl-3 py-3 w-full bg-gray-100 rounded-md"
        />
      </div> */}
      {/* <div className="bg-gray-100 p-4 rounded-lg mb-6">
        <h2 className="text-lg font-semibold mb-4">Categories</h2>

        <Catergories />
      </div> */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <h3 className="text-lg font-semibold mb-4">Top Posts</h3>
        <ol className="space-y-3">
          {topPosts.map((post, index) => (
            <li key={index} className="flex items-start space-x-3">
              <span className="w-6 h-6 text-black text-xs font-semibold rounded-full flex items-center justify-center">
                {index + 1}
              </span>
              <span className="text-sm text-gray-600 leading-5">{post.title}</span>
            </li>
          ))}
        </ol>

      </div>
      <BlogBanner/>
    </aside>
  );
};

export default Siderbar;
