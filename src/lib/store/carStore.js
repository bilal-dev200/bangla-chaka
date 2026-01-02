  // import { create } from "zustand";

  // export const useCarStore = create((set) => ({
  //   selectedCarId: null,

  //     // New fields for multi-step form
  //   step1: null,
  //   step2: null,
  //   step3: null,

  //   // Actions for steps
  //   setStep1: (data) => set({ step1: data }),
  //   setStep2: (data) => set({ step2: data }),
  //   setStep3: (data) => set({ step3: data }),

  //     // Reset all steps
  //   resetSteps: () => set({ step1: null, step2: null, step3: null }),

  //   setSelectedCarId: (id) => set({ selectedCarId: id }),

  //   // Get final merged object
  //   getFinalPayload: () =>
  //     set((state) => ({
  //       finalPayload: {
  //         selectedCarId: state.selectedCarId,
  //         ...state.step1,
  //         ...state.step2,
  //         ...state.step3,
  //       },
  //     })),
  //   carPopupData: null,
  //   setCarPopupData: (data) => set({ carPopupData: data }),
  //   resetCarPopup: () => set({ carPopupData: null }),
  // }));
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCarStore = create(
  persist(
    (set, get) => ({
      selectedCarId: null,
      step1: null,
      step2: null,
      step3: null,

      setStep1: (data) => set({ step1: data }),
      setStep2: (data) => set({ step2: data }),
      setStep3: (data) => set({ step3: data }),
      resetSteps: () => set({ step1: null, step2: null, step3: null }),

      setSelectedCarId: (id) => set({ selectedCarId: id }),

      getFinalPayload: () => {
        const state = get();
        return {
          selectedCarId: state.selectedCarId,
          ...state.step1,
          ...state.step2,
          ...state.step3,
        };
      },

      carPopupData: null,
      setCarPopupData: (data) => set({ carPopupData: data }),
      resetCarPopup: () => set({ carPopupData: null }),
    }),
    { name: "car-storage" }
  )
);
