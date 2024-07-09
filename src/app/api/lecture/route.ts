import connectDB from "@/lib/database/db";
import { Lecture } from "@/schema/lectureSchema";

export async function GET(req: Request) {
  try {
    await connectDB();
    const lectures = await Lecture.find({});
    return Response.json({ lectures });
  } catch (error: any) {
    console.error("Error fetching lectures:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch lectures" }), {
      status: 500,
    });
  }
}
