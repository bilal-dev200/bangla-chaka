import axiosClient from './axiosClient';

export const vehicalsApi = {
  getVehicallist: (payload) =>
    axiosClient.post(`/vehicle-sales/filters`, payload),

addVehicle: (payload) => axiosClient.post("/dealer/vehicles", payload),
  getVehicalSlug: (slug) =>
    axiosClient.get(`/vehicle-sales/slug/${slug}`),

  ourservices: () =>
    axiosClient.get(`/our-services`),

  dealerVechical: () => {
    return axiosClient.get(`/dealer/vehicles?populate[vehicleSale][populate]=*&populate[vehicle_sale][populate]=*&populate[sale][populate]=*&populate[vehicleMedia][populate]=*&populate[vehicleModel][populate]=*&populate[trim][populate]=*`);
  },
  deleteVechical: (id) => {
    return axiosClient.delete(`/dealer/vehicles/${id}`);
  },
  submitSale: (payload) => axiosClient.post("dealer/vehicle-sales", payload),
  updateSale: (id, payload) => axiosClient.put(`dealer/vehicle-sales/${id}`, payload),
  getSalesList: () => axiosClient.get("dealer/vehicle-sales"),
  getSaleDetail: (id) => axiosClient.get(`dealer/vehicle-sales/${id}`),
  homeBanner: () => axiosClient.get(`advertisements/HOMEPAGE_BANNER`),


  checkAvailability: (payload) => axiosClient.post(`vehicle-sales/check-availability`, payload),

  getVehicleDetail: (params) =>
    axiosClient.get(`/user/trade-ins/get-vehicle-detail`, { params }),

  SendOtp: (payload) => axiosClient.post(`user/trade-ins/send-otp`, payload),
  verifyOtp: (payload) => axiosClient.post(`user/trade-ins/verify-otp`, payload),
  updateVehicle: (id, payload) => axiosClient.put(`dealer/vehicles/${id}`, payload),
}; 