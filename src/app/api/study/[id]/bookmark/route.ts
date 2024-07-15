import connectDB from "@/lib/database/db";
import { StudyBookmark } from "@/schema/bookmarkSchema";

export async function GET() {
  try {
    await connectDB();
    const studyBookmark = await StudyBookmark.find({});
    return Response.json(studyBookmark);
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error }), {
      status: 500,
    });
  }
}

export async function POST(req: Request) {
  try {
    await connectDB();

    const { studyId, userId } = await req.json();

    const existingBookmark = await StudyBookmark.findOne({ studyId, userId });

    if (existingBookmark) {
      throw new Error("이미 해당 강의를 찜한 사용자입니다.");
    }

    const newLectureBookmark = {
      studyId: studyId,
      userId: userId,
    };

    await StudyBookmark.create(newLectureBookmark);

    return Response.json(
      { message: "강의 찜하기 성공!" },
      {
        status: 200,
      },
    );
  } catch (error) {
    return Response.json(
      { error: error },
      {
        status: 500,
      },
    );
  }
}

export async function DELETE(req: Request) {
  try {
    await connectDB();

    const { _id } = await req.json();

    await StudyBookmark.findByIdAndDelete(_id);

    return Response.json("강의 찜 삭제 성공!");
  } catch (error: any) {
    throw new Error(error);
  }
}
