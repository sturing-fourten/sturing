"use server";

import { User } from "@/schema/userSchema";
import connectDB from "../db";
import { getSession } from "../getSession";
import { Matching } from "@/schema/matchingSchema";

export async function matchingAction(formData: FormData) {
  const levels = formData.get("levels");
  const progressWay = formData.get("progressWay");
  const locations = formData.get("locations");
  const locationIsVisible = formData.get("locationIsVisible");
  const moods = formData.get("moods");

  connectDB();

  const session = await getSession();
  const id = session?.user?.id;
  const existingUser = await User.findById(id);
  const existingMatching = await Matching.findOne({
    userId: id,
  });
  if (existingUser) {
    if (!existingMatching) {
      await new Matching({
        userId: existingUser._id,
        levels: levels,
        progressWay: progressWay,
        locations: locations,
        locationIsVisible: locationIsVisible,
        moods: moods,
      }).save();
    } else {
      await Matching.findOneAndUpdate(
        { userId: existingUser._id },
        {
          levels: levels,
          progressWay: progressWay,
          locations: locations,
          locationIsVisible: locationIsVisible,
          moods: moods,
        },
      );
    }
  }
}
