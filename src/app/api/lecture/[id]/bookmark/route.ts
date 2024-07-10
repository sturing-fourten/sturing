import connectDB from "@/lib/database/db";
import { LectureBookmark } from "@/schema/lectureSchema";

export async function GET() {
  try {
    await connectDB();
    const lectureBookmark = await LectureBookmark.find({});
    return Response.json({ lectureBookmark });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error }), {
      status: 500,
    });
  }
}

export async function POST(req: Request) {
  try {
    await connectDB();

    const { lectureId, userId } = await req.json();

    const newLectureBookmark = {
      lectureId: lectureId,
      userId: userId,
    };

    await LectureBookmark.create(newLectureBookmark);

    return Response.json(
      { message: "강의 찜하기 성공!" },
      {
        status: 200,
      },
    );
  } catch (error: any) {
    return Response.json(
      { error: error },
      {
        status: 500,
      },
    );
  }
}

export async function DELETE(request: Request) {
  connectDB();

  try {
    const { _id } = await request.json();

    if (!_id) throw new Error("찜이 없습니다.");

    await LectureBookmark.findByIdAndDelete(_id);

    return Response.json("강의 찜 삭제 성공!");
  } catch (error: any) {
    throw new Error(error);
  }
}
