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
  startDate: Date | null;
  endDate: Date | null;
  searchQuery: string | null;
}

export interface Filter extends InitialState {
  setSortByFilter: (sortBy: TSortBy) => void;
  setCategoryFilter: (category: TCategory) => void;
  setRoleFilter: (role: string) => void;
  setLevelFilter: (level: string) => void;
  setLocationFilter: (location: string) => void;
  setMemberCountFilter: (count: number) => void;
  setDateFilter: (startDate: Date, endDate: Date) => void;
  setSearchQuery: (query: string | null) => void;
  resetFilters: () => void;
}

const initialState: InitialState = {
  sortBy: "LATEST",
  categories: [],
  locations: [],
  roles: [],
  levels: [],
  memberCount: 0,
  startDate: null,
  endDate: null,
  searchQuery: "",
};

export const useFilterStore = create<Filter>((set) => ({
  ...initialState,
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
  setDateFilter: (startDate, endDate) => set({ startDate, endDate }),
  setSearchQuery: (query) => {
    query && set({ searchQuery: query });
  },
  resetFilters: () => set(initialState),
}));

export const useSearchTabMenuStore = create<SearchTabMenu>((set) => ({
  menu: "total",
  setTabMenu: (menu) => set({ menu: menu }),
}));
