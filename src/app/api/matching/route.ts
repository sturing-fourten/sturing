"use server";
import connectDB from "@/lib/database/db";
import { Matching } from "@/schema/matchingSchema";

export async function GET(req: Request) {
  await connectDB();
  const url = new URL(req.url);
  const id = url.searchParams.get("id");
  let matching;
  const existing = await Matching.findOne({
    userId: `${id}`,
  });
  if (existing !== null) {
    matching = existing;
  } else {
    matching = {
      userId: `${id}`,
      location: [],
      progressWay: "",
      favorite: [{ field: "", career: "" }],
      mood: [],
    };
  }

  return new Response(JSON.stringify(matching), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

export async function POST(request: Request) {
  await connectDB();
  const res = await request.json();
  await Matching.create(res).then(() => console.log("connected"));
  return Response.json({ message: "Matching Info saved" });
}

export async function PATCH(request: Request) {
  await connectDB();
  const res = await request.json();

  const id = res.userId;

  const updatematching = await Matching.findOneAndUpdate(
    { userId: id },
    {
      ...res,
    },
  );

  return Response.json({ message: updatematching });
}
