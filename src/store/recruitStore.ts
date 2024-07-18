import { LocationsState } from "@/types/matching";
import { RecruitState } from "@/types/recruit";
import { create } from "zustand";

export const useRecruitStore = create<RecruitState>((set) => ({
  lecture: "",
  setLecture: (lecture) => set({ lecture: lecture }),
  category: "",
  setCategory: (category) => set({ category: category }),
  image: "",
  setImage: (image) => set({ image: image }),
  title: "",
  setTitle: (title) => set({ title: title }),
  introduction: "",
  setIntroduction: (introduction) => set({ introduction: introduction }),
  progressWay: "",
  setProgressWay: (progressWay) => set({ progressWay: progressWay }),
  online: "",
  setOnline: (online) => set({ online: online }),
  address: "",
  setAddress: (address) => set({ address: address }),
  date: { from: new Date(), to: new Date() },
  setDate: (date) => set({ date }),
  day: "",
  setDay: (day) => set({ day: day }),
  time: "",
  setTime: (time) => set({ time: time }),
  selectedMood: [],
  setSelectedMood: (selectedMood) => set({ selectedMood: selectedMood }),
  selectedAssignment: [],
  setSelectedAssignment: (selectedAssignment) => set({ selectedAssignment: selectedAssignment }),
  career: [],
  setCareer: (career) => set({ career: career }),
  numberOfTeamMembers: 1,
  setNumberOfTeamMembers: (numberOfTeamMembers) =>
    set((state) => ({
      numberOfTeamMembers:
        typeof numberOfTeamMembers === "function"
          ? numberOfTeamMembers(state.numberOfTeamMembers)
          : numberOfTeamMembers,
    })),
  ages: [],
  setAges: (ages) => set({ ages: ages }),
  role: [],
  setRole: (role) => set({ role: role }),
}));

export const useLocationsStore = create<LocationsState>((set) => ({
  locations: [],
  setLocations: (locations) => set({ locations: locations }),
}));
