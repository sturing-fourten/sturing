"use server";

import { User } from "@/schema/userSchema";
import connectDB from "../db";
import { getSession } from "../getSession";
import { Matching } from "@/schema/matchingSchema";

export async function matching(formData: FormData) {
  const levels = formData.get("levels");
  const progressWay = formData.get("progressWay");
  const locations = formData.get("locations");
  const moods = formData.get("moods");

  connectDB();

  const session = await getSession();
  const email = session?.user?.email;
  const existingUser = await User.findOne({
    email,
  });
  if (existingUser) {
    const matchingData = await new Matching({
      userEmail: email,
      levels: levels,
      progressWay: progressWay,
      locations: locations,
      moods: moods,
    });

    await matchingData.save();
  }
}
