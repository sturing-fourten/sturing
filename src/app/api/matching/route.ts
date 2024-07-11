"use server";
import connectDB from "@/lib/database/db";
import { getSession } from "@/lib/database/getSession";
import { Matching } from "@/schema/matchingSchema";

export async function GET(reqest: Request) {
  await connectDB();
  const session = await getSession();
  const userId = session?.user?.id;
  let matching;
  const existing = await Matching.findOne({
    userId: `${userId}`,
  });

  if (existing !== null) {
    matching = existing;
  } else {
    matching = {
      userId: `${userId}`,
      levels: "",
      progressWay: "",
      locations: "",
      locationIsVisible: Boolean,
      moods: "",
    };
  }

  return new Response(JSON.stringify(matching), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
