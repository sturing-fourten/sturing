"use server";

import connectDB from "../db";
import { User } from "@/schema/userSchema";
import { getSession } from "../getSession";

export async function editProfile(formData: FormData) {
  const name = formData.get("name");
  const nickname = formData.get("nickname");
  const profileImageUrl = formData.get("profileImageUrl");
  const age = formData.get("age");
  const gender = formData.get("gender");
  const ageIsVisible = formData.get("ageIsVisible");
  const genderIsVisible = formData.get("genderIsVisible");

  connectDB();

  const session = await getSession();
  const email = session?.user?.email;
  await User.findOneAndUpdate(
    { email: email },
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
}
