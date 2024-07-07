import connectDB from "@/lib/database/db";
import { Study } from "@/schema/studySchema";

export async function GET(request: Request) {
  connectDB();

  try {
    const studyList = await Study.find({});

    return Response.json(studyList);
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function POST(request: Request) {
  connectDB();

  try {
    const newStudy = await request.json();
    if (!newStudy) throw new Error("스터디 정보가 없습니다.");

    await Study.create(newStudy);

    return Response.json("스터디 개설 성공");
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function DELETE(request: Request) {
  connectDB();

  try {
    const _id = await request.json();
    if (!_id) throw new Error("스터디 정보가 없습니다.");

    await Study.findByIdAndDelete(_id);

    return Response.json("스터디 삭제 성공");
  } catch (error: any) {
    throw new Error(error);
  }
}
