import create from "zustand";
import { EditProfileType } from "@/types/editProfile";

interface UserState {
  user: EditProfileType | null;
  fetchUser: () => Promise<void>;
  setUser: (user: EditProfileType) => void;
  reset: () => void;
}

export const useUserStore = create<UserState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  fetchUser: async () => {
    try {
      const response = await fetch("/api/userProfile");
      if (!response.ok) {
        throw new Error("사용자 정보를 가져오는 데 실패했습니다.");
      }
      const data = await response.json();
      set({ user: data });
    } catch (error) {
      console.error("사용자 정보 가져오기 실패:", error);
      set({ user: null });
    }
  },
  reset: () => set({ user: null }),
}));
