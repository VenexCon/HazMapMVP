// src/store/useStore.ts

import {create}  from "zustand";

interface StoreState {
  weatherData: any;
  heatIndexData: any;
  floodMapData: any;
  setWeatherData: (data: any) => void;
  setHeatIndexData: (data: any) => void;
  setFloodMapData: (data: any) => void;
}

export const useStore = create<StoreState>((set) => ({
  weatherData: null,
  heatIndexData: null,
  floodMapData: null,
  setWeatherData: (data) => set({ weatherData: data }),
  setHeatIndexData: (data) => set({ heatIndexData: data }),
  setFloodMapData: (data) => set({ floodMapData: data }),
}));
