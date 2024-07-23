import { TCategory } from "@/types/api/study";
import { SearchTabMenu, TSeachTabMenu, TSortBy } from "@/types/filter";
import toggleFilterInArray from "@/utils/toggleFilterInArray";
import { create } from "zustand";

interface InitialState {
  sortBy: TSortBy;
  categories: TCategory[];
  roles: string[];
  levels: string[];
  locations: string[];
  memberCount: number;
  startDate: string | null;
  endDate: string | null;
}

export interface Filter extends InitialState {
  searchQuery: string | null;
  setSortByFilter: (sortBy: TSortBy) => void;
  setCategoryFilter: (category: TCategory) => void;
  setRoleFilter: (role: string) => void;
  setLevelFilter: (level: string) => void;
  setLocationFilter: (location: string) => void;
  setMemberCountFilter: (count: number) => void;
  setStartDate: (startDate: string) => void;
  setEndDate: (endDate: string) => void;
  setSearchQuery: (query: string | null) => void;
  resetFilters: () => void;
  resetCategoryFilter: () => void;
}

const initialState: InitialState = {
  sortBy: "LATEST",
  categories: [],
  locations: [],
  roles: [],
  levels: [],
  memberCount: 1,
  startDate: null,
  endDate: null,
};

export const useFilterStore = create<Filter>((set) => ({
  ...initialState,
  searchQuery: "",
  setSortByFilter: (sortBy) => set({ sortBy: sortBy }),
  setCategoryFilter: (category) =>
    set((state) => ({
      categories: toggleFilterInArray(state.categories, category),
    })),
  setRoleFilter: (role) =>
    set((state) => ({
      roles: toggleFilterInArray(state.roles, role),
    })),
  setLevelFilter: (level) =>
    set((state) => ({
      levels: toggleFilterInArray(state.levels, level),
    })),
  setLocationFilter: (location) =>
    set((state) => ({
      locations: toggleFilterInArray(state.locations, location),
    })),
  setMemberCountFilter: (count) => set({ memberCount: count }),
  setStartDate: (startDate) => set({ startDate }),
  setEndDate: (endDate) => set({ endDate }),
  setSearchQuery: (query) => {
    set({ searchQuery: query });
  },
  resetFilters: () => set(initialState),
  resetCategoryFilter: () => set({ categories: [] }),
}));

export const useSearchTabMenuStore = create<SearchTabMenu>((set) => ({
  menu: "total",
  setTabMenu: (menu) => set({ menu: menu }),
}));
