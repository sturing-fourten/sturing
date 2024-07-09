import { create } from "zustand";

interface level {
  interest: string;
  level: string;
}

interface location {
  city: string;
  district: string;
}

interface LevelsState {
  levels: level[];
  setLevels: (levels: level[]) => void;
}

interface ProgressWayState {
  progressWay: string;
  setProgressWay: (progressWay: string) => void;
}

interface LocationsState {
  locations: location[];
  setLocations: (locations: location[]) => void;
}

interface MoodsState {
  moods: string[];
  setMoods: (moods: string[]) => void;
}

export const useLevelsStore = create<LevelsState>((set) => ({
  levels: [],
  setLevels: (levels) => set({ levels: levels }),
}));

export const useProgressWayStore = create<ProgressWayState>((set) => ({
  progressWay: "",
  setProgressWay: (progressWay) => set({ progressWay: progressWay }),
}));

export const useLocationsStore = create<LocationsState>((set) => ({
  locations: [],
  setLocations: (locations) => set({ locations: locations }),
}));

export const useMoodsStore = create<MoodsState>((set) => ({
  moods: [],
  setMoods: (moods) => set({ moods: moods }),
}));
