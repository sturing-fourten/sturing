import {
  SelectLectureState,
  StudyContentState,
  StudyDetailState,
  TeamMemberInfoState,
  RecruitState,
} from "@/types/recruit";

import { create } from "zustand";

export const useSelectLectureStore = create<SelectLectureState>((set) => ({
  lecture: "",
  setLecture: (lecture) => set({ lecture: lecture }),
  category: "",
  setCategory: (category) => set({ category: category }),
}));

export const useStudyContentStore = create<StudyContentState>((set) => ({
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
}));

export const useStudyDetailStore = create<StudyDetailState>((set) => ({
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
}));

export const useTeamMemberInfoStore = create<TeamMemberInfoState>((set) => ({
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

export const useRecruitStore = create<RecruitState>((set) => ({
  recruit: null,
  setRecruit: (recruit) => set({ recruit: recruit }),
  fetchRecruit: async () => {
    try {
      const response = await fetch(`/api/study`);
      if (!response.ok) {
        throw new Error("작성한 스터디를 가져오는 데 실패했습니다.");
      }
      const data = await response.json();
      set({ recruit: data });
    } catch (error) {
      console.error("작성한 스터디 가져오기 실패:", error);
      set({ recruit: null });
    }
  },
}));
