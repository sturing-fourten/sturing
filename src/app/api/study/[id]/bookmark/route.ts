import connectDB from "@/lib/database/db";
import { StudyBookmark } from "@/schema/bookmarkSchema";
import { NextResponse } from "next/server";

export async function GET(req: Request, { params }: { params: { id: string } }) {
  const studyId = params.id;
  if (!studyId) {
    return Response.json({ message: "스터디 id 가 필요합니다." }, { status: 400 });
  }
  await connectDB();

  try {
    const studyBookmark = await StudyBookmark.find({ studyId: studyId });

    let bookmarkList: {
      id: string;
      studyId: string;
      userId: string;
    }[] = [];

    if (studyBookmark) {
      bookmarkList = await Promise.all(
        studyBookmark.map(async (bookmark: any) => {
          return {
            id: bookmark.id,
            studyId: bookmark.studyId,
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

    const { studyId, userId } = await req.json();

    const existingBookmark = await StudyBookmark.findOne({ studyId, userId });

    if (existingBookmark) {
      throw new Error("이미 해당 스터디를 찜한 사용자입니다.");
    }

    const newLectureBookmark = {
      studyId: studyId,
      userId: userId,
    };

    await StudyBookmark.create(newLectureBookmark);

    return Response.json(
      { message: "스터디 찜하기 성공!" },
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

    const response = await StudyBookmark.findByIdAndDelete(_id);
    if (!response) {
      return NextResponse.json({ message: "댓글을 찾을 수 없습니다." }, { status: 404 });
    }

    return NextResponse.json("강의 찜 삭제 성공!");
  } catch (error: any) {
    throw new Error(error);
  }
}
