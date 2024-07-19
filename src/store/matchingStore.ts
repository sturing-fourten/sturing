import { LevelsState, LocationsState, MatchingState, MoodsState, ProgressWayState } from "@/types/matching";
import { create } from "zustand";

export const useLevelsStore = create<LevelsState>((set) => ({
  levels: [],
  setLevels: (levels) => set({ levels }),
  reset: () => set({ levels: [] }),
}));

export const useProgressWayStore = create<ProgressWayState>((set) => ({
  progressWay: "",
  setProgressWay: (progressWay) => set({ progressWay }),
  reset: () => set({ progressWay: "" }),
}));

export const useLocationsStore = create<LocationsState>((set) => ({
  locations: [],
  setLocations: (locations) => set({ locations }),
  reset: () => set({ locations: [] }),
}));

export const useMoodsStore = create<MoodsState>((set) => ({
  moods: [],
  setMoods: (moods) => set({ moods }),
  reset: () => set({ moods: [] }),
}));

export const useMatchingStore = create<MatchingState>((set) => ({
  matching: null,
  setMatching: (matching) => set({ matching }),
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
  reset: () => set({ matching: null }),
}));
