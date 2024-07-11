import connectDB from "@/lib/database/db";
import { Lecture } from "@/schema/lectureSchema";
import { Study } from "@/schema/studySchema";

export async function GET(req: Request, { params }: { params: { id: string } }) {
  const id = params.id;

  try {
    await connectDB();
    const lecture = await Lecture.findById(id);
    if (!lecture) {
      return Response.json({ message: "해당 강의가 존재하지 않습니다." }, { status: 404 });
    }

    const relatedStudyList = await Study.find({ lectureId: id, status: "RECRUIT_START" });

    return Response.json({ lecture, relatedStudyList });
  } catch (error: any) {
    return Response.json({ message: "강의를 불러오는데 실패하였습니다." }, { status: 500 });
  }
}
