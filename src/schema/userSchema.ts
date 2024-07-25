import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    accessToken: { type: String },
    name: { type: String, required: true }, //github
    nickname: { type: String, required: true }, //github
    email: { type: String, default: "" }, //github
    profileImageUrl: String, //github
    age: { type: String, default: "" },
    ageIsVisible: { type: Boolean, default: false },
    gender: { type: String, default: "" },
    genderIsVisible: { type: Boolean, default: false },
    authProvider: { type: String, enum: ["github", "kakao"], default: "github" },
    sturingIndex: { type: Number, required: true, min: 0, max: 100 },
  },
  { timestamps: true },
);

export const User = mongoose.models?.User || mongoose.model("User", userSchema);
