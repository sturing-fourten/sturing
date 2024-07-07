"use server";

import { getSession } from "next-auth/react";
import connectDB from "../db";
import { User } from "@/schema/userSchema";

export async function matching(formData: FormData) {
  const location = formData.get("location");
  const progressWay = formData.get("progressWay");
  const favorite_field = formData.get("favorite_field");
  const favorite_career = formData.get("favorite_career");
  const mood_first = formData.get("mood_first");
  const mood_second = formData.get("mood_second");
  const mood_third = formData.get("mood_third");

  const favorite = [{ field: favorite_field, career: favorite_career }];
  const mood = [mood_first, mood_second, mood_third];

  connectDB();

  const session = await getSession();
  const authProviderId = session?.user?.id;
  await User.findOneAndUpdate(
    { authProviderId: authProviderId },
    {
      location: location,
      progressWay: progressWay,
      favorite: favorite,
      mood: mood,
    },
  );
}
