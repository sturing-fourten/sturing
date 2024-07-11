import connectDB from "@/lib/database/db";
import { RecruitComment } from "@/schema/RecruitCommentSchema";
import { Study } from "@/schema/studySchema";

export async function GET(req: Request, { params }: { params: { id: string } }) {
  const studyId = params.id;
  if (!studyId) {
    return Response.json({ message: "스터디 id 가 필요합니다." }, { status: 400 });
  }
  connectDB();

  try {
    const commentList = await RecruitComment.find({ studyId });

    return Response.json(commentList, { status: 200 });
  } catch (error: any) {
    if (error.name === "CastError") {
      return Response.json({ message: "해당 스터디가 존재하지 않습니다." }, { status: 404 });
    } else {
      return Response.json({ error }, { status: 500 });
    }
  }
}

export async function POST(req: Request, { params }: { params: { id: string } }) {
  const { userId, content } = await req.json();
  const studyId = params.id;

  if (!userId || !content) return Response.json({ message: "필수 값을 모두 입력해 주세요" }, { status: 404 });

  const newComment = {
    studyId,
    userId,
    content,
  };

  connectDB();

  try {
    Study.findById(studyId);

    const comment = await RecruitComment.create(newComment);
    return Response.json(comment, { status: 200 });
  } catch (error: any) {
    if (error.name === "ValidationError") {
      return Response.json({ message: "해당 스터디가 존재하지 않습니다." }, { status: 404 });
    } else {
      return Response.json(error, { status: 500 });
    }
  }
}
