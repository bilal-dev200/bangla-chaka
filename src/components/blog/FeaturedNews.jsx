import React from 'react'
import Image from "next/image";
const featuredNews = [
  {
    id: 1,
    image: "/Images/blog4.PNG",
    label: "Trade in · Jan 2022",
    title: "90,000-Plus Cadillac, Chevrolet Vehicles Recalled...",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been...",
  },
  {
    id: 2,
    image: "/Images/blog4.PNG",
    label: "Trade in · Mar 2022",
    title: "90,000-Plus Cadillac, Chevrolet Vehicles Recalled...",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been...",
  },
  {
    id: 3,
    image: "/Images/blog4.PNG",
    label: "Trade in · Nov 2022",
    title: "90,000-Plus Cadillac, Chevrolet Vehicles Recalled...",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been...",
  },
];
const FeaturedNews = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">
        Featured news
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {featuredNews.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition"
          >
            <Image
              src={item.image}
              alt={item.title}
              width={400}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <p className="text-sm text-gray-500 mb-1">{item.label}</p>
              <h3 className="text-lg font-semibold text-gray-800 leading-tight mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FeaturedNews