import { create } from "zustand";
import { persist } from "zustand/middleware";
import { authApi, removeAuthToken, setAuthToken } from "../api/auth";

export const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      token: null,
      isLoading: false,
      error: null,

      // Reset errors
      resetError: () => set({ error: null }),

      login: async (email, password) => {
        set({ isLoading: true, error: null });
        try {
          const res = await authApi.login({ email, password });

          const { user, token } = res.data;

          setAuthToken(token);

          set({ user, token, isLoading: false });

          return user;
        } catch (error) {
          set({ error: error.message, isLoading: false });
          throw error;
        }
      },

      register: async (userData) => {
        set({ isLoading: true, error: null });
        try {
          if (userData.password !== userData.confirmPassword) {
            throw new Error("Passwords don't match");
          }

          const { data: user, token } = await authApi.register({
            name: userData.name,
            email: userData.email,
            phone: userData.phone,
            billing_address: userData.billing_address,
            password: userData.password,
          });

          localStorage.setItem("token", token);
          set({ user, token, isLoading: false });
          return user;
        } catch (error) {
          set({ error: error.message, isLoading: false });
          throw error;
        }
      },

      verifyAuth: async () => {
        try {
          const token = localStorage.getItem("token");
          if (!token) return null;

          const user = await authApi.verifyToken();
          set({ user });
          return user;
        } catch (error) {
          localStorage.removeItem("token");
          set({ user: null, token: null });
          return null;
        }
      },

      updateUser: (updatedData) =>
  set((state) => ({
    user: { ...state.user, ...updatedData },
  })),


      logout: () => {
        set({ user: null, token: null });
        removeAuthToken();
        useWatchlistStore.getState().clearWatchlist();
      },
    }),
    {
      name: "auth-storage",
      getStorage: () => localStorage,
    }
  )
);

export const getStoredUser = () => {
  try {
    const data = localStorage.getItem("auth-storage");
    if (!data) return null;
    const parsed = JSON.parse(data);
    return parsed?.state?.user || null;
  } catch (e) {
    console.error("Error parsing stored user", e);
    return null;
  }
};