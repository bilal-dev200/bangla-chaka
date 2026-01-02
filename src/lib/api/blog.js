import axiosClient from './axiosClient';

export const blogsApi = {


  getBlogCatergories: () =>
    axiosClient.get(`/blog-categories`),

    getAllBlog: () => {
    return axiosClient.get(`blogs`); 
  },
    getFilteredBlogs: (payload) => {
    return axiosClient.post(`/blogs/filters`, payload); 
  },
 getBanner: () => {
    return axiosClient.get(`advertisements/BLOGS_PAGE_BANNER_ONE`);
  },

getBlogBySlug: (slug) => {
  return axiosClient.get(`blogs/slug/${slug}`);
}

//   dealerVechical: () => {
//     return axiosClient.get(`/dealer/vehicles`);
//   },
//   submitSale: (payload) => axiosClient.post("dealer/vehicle-sales", payload),
//  homeBanner:()=>axiosClient.get(`advertisements/HOMEPAGE_BANNER`)
}; 