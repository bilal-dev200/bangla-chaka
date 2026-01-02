import axiosClient from './axiosClient';

export const dataApi = {
  getBanner: (key) =>
    axiosClient.get(`/advertisements/${key}`),
  getFaqs: () =>
    axiosClient.get(`/faqs`),
}; 