import axiosClient from './axiosClient';

export const tradeInApi = {
  submitForm: (payload) =>
    axiosClient.post(`/user/trade-ins`, payload),

SendOtp:(payload)=>axiosClient.post(`user/trade-ins/send-otp`,payload),
verifyOtp:(payload)=>axiosClient.post(`user/trade-ins/verify-otp`,payload)
}; 