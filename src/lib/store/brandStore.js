import { create } from "zustand";
import { dropDownApi } from "../api/dropdown";

export const useBrandsStore = create((set) => ({
  brands: [],
  isLoading: false,
  error: null,
  selectedBrands: null,
  setSelectedBrand: (brands) => set({ selectedBrands: brands }),
  getAllBrands: async () => {
    set({ isLoading: true, error: null, brands: [] });
    try {
      const { data: brands } = await dropDownApi.getBrandlist();
      set({ brands, isLoading: false });
      return brands;
    } catch (error) {
      set({ error: error.message, isLoading: false });
      throw error;
    }
  },
}));
