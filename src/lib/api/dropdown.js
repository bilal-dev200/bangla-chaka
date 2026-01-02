import { GiAxeSword } from 'react-icons/gi';
import axiosClient from './axiosClient';

export const dropDownApi = {
  getBrandlist: () =>
    axiosClient.get(`/brands`),
  getTrimlist: () =>
    axiosClient.get('/trims'),
  getBodyTypelist: () =>
    axiosClient.get(`/body-types`),
  getFuelTypelist: () =>
    axiosClient.get(`/fuel-types`),
  getEngineTypelist: () =>
    axiosClient.get(`/engine-types`),
  getColorlist: () =>
    axiosClient.get(`/colors`),
   getFeaturelist: () =>
    axiosClient.get(`/feature-categories`),
  getVehiclemodel:()=>
    axiosClient.get(`vehicle-models`),
  getBrand:()=>
    axiosClient.get(`brands`),
  getFilterBrands:(brandId)=>{
  return axiosClient.get(`brands/${brandId}`);
    },
  getModelYear:(modelId)=>{
    return axiosClient.get(`vehicle-models/${modelId}/years`)
  }
}; 