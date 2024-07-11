"use server";

import connectDB from "../db";
import { User } from "@/schema/userSchema";
import { getSession } from "../getSession";
import { redirect } from "next/navigation";
import { Matching } from "@/schema/matchingSchema";

export async function editProfile(formData: FormData) {
  const name = formData.get("name");
  const nickname = formData.get("nickname");
  const profileImageUrl = formData.get("profileImageUrl");
  const age = formData.get("age");
  const gender = formData.get("gender");
  const ageIsVisible = formData.get("ageIsVisible");
  const genderIsVisible = formData.get("genderIsVisible");
  const locationIsVisible = formData.get("locationIsVisible");

  connectDB();

  const session = await getSession();
  const id = session?.user?.id;
  await User.findOneAndUpdate(
    { _id: id },
    {
      name: name,
      nickname: nickname,
      profileImageUrl: profileImageUrl,
      age: age,
      ageIsVisible: ageIsVisible,
      gender: gender,
      genderIsVisible: genderIsVisible,
    },
  );
  await Matching.findOneAndUpdate(
    { userId: id },
    {
      locationIsVisible: locationIsVisible,
    },
  );
  redirect("/mypage");
}
