import React, { useEffect, useState } from "react";
import { FiShare2 } from "react-icons/fi";
import { useParams } from "next/navigation";
import { blogsApi } from "@/lib/api/blog";
import Blog from "./Blog";
import { Image_URL } from "@/config/constants";
import Image from "next/image";

const articleContent = [
  {
    type: "heading",
    level: 2,
    text: "Lorem ipsum is simply dummy text",
  },
  {
    type: "paragraph",
    text: `Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text...`,
  },
  {
    type: "list",
    items: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      "Sed do eiusmod tempor incididunt ut labore et dolore magna",
      "Ut enim ad minim veniam, quis nostrud exercitation",
      "Duis aute irure dolor in reprehenderit in voluptate",
      "Excepteur sint occaecat cupidatat non proident",
    ],
  },
  {
    type: "heading",
    level: 3,
    text: "Lorem ipsum is simply dummy text",
  },
  {
    type: "paragraph",
    text: `It was popularised in the 1960s with the release of Letraset sheets...`,
  },
  {
    type: "image",
    src: "/Images/blogdetail.png",
    alt: "Car accessories",
  },
  {
    type: "heading",
    level: 3,
    text: "Lorem ipsum is simply dummy text",
  },
  {
    type: "paragraph",
    text: `There are many variations of passages of Lorem Ipsum available...`,
  },
];
const Blogdetail = ({ blog }) => {
  // const { slug } = useParams();
  // const [blog, setBlog] = useState(null);
  // const [loading, setLoading] = useState(true);
  // const [topPosts, setTopPosts] = useState(null)
  // useEffect(() => {
  //   if (!slug) return;

  //   blogsApi.getBlogBySlug(slug).then((res) => {
  //     setBlog(res.data);
  //     console.log(res.data)
  //     setTopPosts(res.topPosts)
  //     console.log(res.topPosts,"DD")
  //     setLoading(false);
  //   });
  // }, [slug]);
  if (!blog) return null;

  return (
    <main className="lg:col-span-3">
      <div className="mb-4">
        <div className="mb-2 ml-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {blog?.title}
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-3">
            {/* Discover what makes the 2025 GMC Terrain a standout SUV — from its
            refreshed design to cutting-edge technology and powerful
            performance. */}
            {blog?.subtitle}
          </p>
          <div className="flex items-center justify-between text-sm text-gray-500">
            <span>Niel Stender · June 13, 2025</span>
            <FiShare2
              size={22}
              className="cursor-pointer hover:text-blue-600 transition"
            />
          </div>
        </div>
        <Image
          src={`${Image_URL}${blog?.thumbnail}`}
          alt={blog?.title || "Blog Image"}
          width={920}
          height={410}
          className="ml-1 rounded-lg object-cover"
        />
      </div>

      <article>
        {articleContent.map((block, index) => {
          if (block.type === "heading") {
            const HeadingTag = `h${block.level}`;
            return (
              <HeadingTag
                key={index}
                className={`text-${block.level === 2 ? "3xl" : "2xl"
                  } font-bold text-gray-900 mb-4`}
              >
                {block.text}
              </HeadingTag>
            );
          }

          if (block.type === "paragraph") {
            return (
              <p
                key={index}
                className="text-gray-700 text-lg leading-relaxed mb-6"
              >
                {block.text}
              </p>
            );
          }

          if (block.type === "list") {
            return (
              <ul
                key={index}
                className="list-disc list-inside text-gray-700 mb-8 space-y-2"
              >
                {block.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            );
          }

          if (block.type === "image") {
            return (
              <div key={index} className="mb-8">
                <Image
                  src={block.src}
                  alt={block.alt}
                  width={900}
                  height={300}
                  className="rounded-lg shadow-md"
                />
              </div>
            );
          }

          return null;
        })}
      </article>
    </main>
  );
};

export default Blogdetail;
