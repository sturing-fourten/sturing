import connectDB from "@/lib/database/db";
import { LectureBookmark } from "@/schema/bookmarkSchema";
import { NextResponse } from "next/server";

export async function GET(req: Request, { params }: { params: { id: string } }) {
  const lectureId = params.id;
  if (!lectureId) {
    return Response.json({ message: "스터디 id 가 필요합니다." }, { status: 400 });
  }
  await connectDB();

  try {
    const lectureBookmark = await LectureBookmark.find({ lectureId: lectureId });

    let bookmarkList: {
      id: string;
      lectureId: string;
      userId: string;
    }[] = [];

    if (lectureBookmark) {
      bookmarkList = await Promise.all(
        lectureBookmark.map(async (bookmark: any) => {
          return {
            id: bookmark.id,
            lectureId: bookmark.lectureId,
            userId: bookmark.userId,
          };
        }),
      );
    }

    return Response.json(bookmarkList, { status: 200 });
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

    const existingBookmark = await LectureBookmark.findOne({ lectureId, userId });

    if (existingBookmark) {
      throw new Error("이미 해당 강의를 찜한 사용자입니다.");
    }

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
  } catch (error) {
    return Response.json(
      { error: error },
      {
        status: 500,
      },
    );
  }
}

export async function DELETE(req: Request): Promise<NextResponse> {
  const { _id } = await req.json();
  try {
    await connectDB();

    const response = await LectureBookmark.findByIdAndDelete(_id);
    if (!response) {
      return NextResponse.json({ message: "사용자를 찾을 수 없습니다." }, { status: 404 });
    }

    return NextResponse.json("강의 찜 삭제 성공!");
  } catch (error: any) {
    throw new Error(error);
  }
}
