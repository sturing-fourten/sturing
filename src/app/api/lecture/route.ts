import connectDB from "@/lib/database/db";
import { Lecture } from "@/schema/lectureSchema";

export async function GET(req: Request) {
  try {
    await connectDB();
    const lecture = await Lecture.find({});
    return Response.json(lecture);
  } catch (error: any) {
    throw new Error(error);
  }
}
