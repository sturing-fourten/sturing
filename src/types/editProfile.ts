import mongoose from "mongoose";

export type EditProfileType = {
  _id: mongoose.Types.ObjectId;
  name: string;
  email: string;
  nickname: string;
  profileImageUrl: string;
  age: "20대" | "30대" | "40대" | "50대" | "";
  ageIsVisible: boolean;
  gender: "남" | "여" | "";
  genderIsVisible: boolean;
} | null;
