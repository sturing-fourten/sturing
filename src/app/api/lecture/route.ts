import connectDB from "@/lib/database/db";
import { Lecture } from "@/schema/lectureSchema";

export async function GET(req: Request) {
  try {
    await connectDB();
    const lectures = await Lecture.find({});
    return Response.json({ lectures });
  } catch (error: any) {
    console.error("Error fetching lectures:", error);
    return new Response(JSON.stringify({ error: "강의 리스트를 불러오는데 실패하였습니다." }), {
      status: 500,
    });
  }
}
