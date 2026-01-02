import { create } from "zustand";
import { vehicalsApi } from "../api/vehical";

export const useVehicalsStore = create((set) => ({
  vehicals: [],
  isLoading: false,
  error: null,
  selectedVehicals: null,
  setSelectedCategory: (vehicals) => set({ selectedVehicals: vehicals }),
  getAllvechicle: async (params ={}) => {
    set({ isLoading: true, error: null, vehicals: [] });
    try {
      const { data: vehicals } = await vehicalsApi.getVehicallist(params);
      set({ vehicals, isLoading: false });
      return vehicals;
    } catch (error) {
      set({ error: error.message, isLoading: false });
      throw error;
    }
  },
}));
