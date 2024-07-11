import { MatchingType } from "@/types/matching";
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

interface MatchingState {
  matching: MatchingType | null;
  fetchMatching: () => Promise<void>;
  setMatching: (matching: MatchingType) => void;
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

export const useMatchingStore = create<MatchingState>((set) => ({
  matching: null,
  setMatching: (matching) => set({ matching: matching }),
  fetchMatching: async () => {
    try {
      const response = await fetch(`/api/matching/`);
      if (!response.ok) {
        throw new Error("해당 사용자의 매칭 정보를 가져오는 데 실패했습니다.");
      }
      const data = await response.json();
      set({ matching: data });
    } catch (error) {
      console.error("사용자 매칭 정보 가져오기 실패:", error);
      set({ matching: null });
    }
  },
}));
