// import React, { useEffect, useState } from 'react'
// import { blogsApi } from '@/lib/api/blog';

// const Catergories = ({ selectedCategory, setSelectedCategory }) => {
//     const [categories, setCategories] = useState([]);
//     useEffect(() => {
//         blogsApi.getBlogCatergories().then((res) => {
//             setCategories(res?.data || []); 
//         });
//     }, []);
//     return (
//         <nav
//             className="space-y-4 max-h-64 overflow-y-auto scrollbar-hide" 
//         >
//             {categories.map((cat, index) => (
//                 <div key={index} className="border-b border-gray-300 pb-2">
//                     <a
//                         href="#"
//                         className="block text-gray-700 hover:text-blue-600 text-sm"
//                     >
//                         {cat.name}
//                     </a>
//                 </div>
//             ))}
//         </nav>
//     )
// }

// export default Catergories
import React, { useEffect, useState } from 'react'
import { blogsApi } from '@/lib/api/blog';

const Catergories = ({ selectedCategory, setSelectedCategory }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    blogsApi.getBlogCatergories().then((res) => {
      setCategories(res?.data || []);
    });
  }, []);

  return (
    <nav className="space-y-2 max-h-64 overflow-y-auto scrollbar-hide">
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => setSelectedCategory(cat.id)}
          className={`block w-full text-left px-3 py-2 rounded-md text-sm transition
            ${selectedCategory === cat.id
              ? "bg-[#EB0102] text-white font-medium"
              : " text-gray-700 hover:bg-gray-300"
            }`}
        >
          {cat.name}
        </button>
      ))}
    </nav>
  );
};

export default Catergories;
