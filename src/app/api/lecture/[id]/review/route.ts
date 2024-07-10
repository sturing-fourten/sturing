import connectDB from "@/lib/database/db";
import { Lecture } from "@/schema/lectureSchema";

export async function POST(req: Request, { params }: { params: { id: string } }) {
  const lectureId = params.id;
  try {
    await connectDB();

    const { rating, comment, reviewerId, reviewer } = await req.json();

    const newReview = {
      reviewerId: reviewerId,
      reviewer: reviewer,
      rating: rating,
      comment: comment,
      createdAt: new Date(),
    };

    await Lecture.updateOne({ lectureId: lectureId }, { $push: { review: newReview } });
    return Response.json(
      { message: "강의 후기를 작성했습니다!" },
      {
        status: 200,
      },
    );
  } catch (error: any) {
    return Response.json(
      { error: "강의 리뷰를 작성하는데 실패하였습니다." },
      {
        status: 500,
      },
    );
  }
}
