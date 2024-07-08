import connectDB from "@/lib/database/db";
import { LectureReview } from "@/schema/lectureSchema";

export async function POST(req: Request) {
  try {
    connectDB();
    const newReview = await req.json();
    if (!newReview) throw new Error("강의 리뷰가 없습니다.");

    await LectureReview.create(newReview);

    return Response.json("강의 리뷰 작성 성공");
  } catch (error: any) {
    throw new Error(error);
  }
}
