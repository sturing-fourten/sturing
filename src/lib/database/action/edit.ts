"use server";

import { getSession } from "next-auth/react";
import connectDB from "../db";
import { User } from "@/schema/userSchema";

export async function editProfile(formData: FormData) {
  const age = formData.get("age");
  const gender = formData.get("gender");

  connectDB();

  const session = await getSession();
  const authProviderId = session?.user?.id;
  await User.findOneAndUpdate(
    { authProviderId: authProviderId },
    {
      age: age,
      gender: gender,
    },
  );
}
