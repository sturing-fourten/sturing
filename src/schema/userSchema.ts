import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    accessToken: { type: String },
    name: { type: String, required: true }, //github
    nickname: { type: String, required: true }, //github
    email: { type: String, default: "" }, //github
    profileImageUrl: String, //github
    age: { value: { type: String, default: "" }, isVisible: { type: Boolean, default: true } },
    gender: { value: { type: String, default: "" }, isVisible: { type: Boolean, default: true } },
    authProvider: { type: String, enum: ["github"], default: "github" },
  },
  { timestamps: true },
);

export const User = mongoose.models?.User || mongoose.model("User", userSchema);
