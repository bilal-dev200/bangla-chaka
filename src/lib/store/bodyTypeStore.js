import { create } from "zustand";
import { dropDownApi } from "../api/dropdown";

export const useBodyTypeStore = create((set) => ({
  bodyType: [],
  isLoading: false,
  error: null,
  selectedBodyType: null,
  setSelectedBrand: (bodyType) => set({ selectedBodyType: bodyType }),
  getAllBodyType: async () => {
    set({ isLoading: true, error: null, bodyType: [] });
    try {
      const { data: bodyType } = await dropDownApi.getBodyTypelist();
      set({ bodyType, isLoading: false });
      return bodyType;
    } catch (error) {
      set({ error: error.message, isLoading: false });
      throw error;
    }
  },
}));
