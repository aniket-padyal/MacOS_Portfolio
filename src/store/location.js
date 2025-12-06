import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { locations } from "#constants";

const DEFAULT_LOCATION = locations.work;

const useLoactionStore = create(
  immer((set) => ({
    activeLoaction: DEFAULT_LOCATION,

    setActiveLocation: (location = null) =>
      set((state) => {
        state.activeLoaction = location;
      }),

    resetActiveLocation: () =>
      set((state) => {
        state.activeLoaction = DEFAULT_LOCATION;
      }),
  }))
);

export default useLoactionStore;
