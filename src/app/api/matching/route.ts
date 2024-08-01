"use server";
import connectDB from "@/lib/database/db";
import { getSession } from "@/lib/database/getSession";
import { Matching } from "@/schema/matchingSchema";

export async function GET(request: Request) {
  const session = await getSession();
  const userId = session?.user?.id;
  await connectDB();
  try {
    const existing = await Matching.findOne({
      userId: `${userId}`,
    });

    return Response.json(existing ?? null);
  } catch (error) {
    return Response.json({ error });
  }
}
