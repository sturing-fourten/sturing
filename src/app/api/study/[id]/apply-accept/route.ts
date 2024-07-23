import connectDB from "@/lib/database/db";
import { Study } from "@/schema/studySchema";
import { User } from "@/schema/userSchema";

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
  const studyId = params.id;
  const { applicantId } = await req.json();

  const token = req.headers.get("Authorization");
  let userId = token?.split(" ")[1];
  await connectDB();

  if (!studyId) {
    return Response.json({ error: "스터디 id 가 필요합니다." }, { status: 400 });
  }
  if (!userId) {
    return Response.json({ error: "유저 id 가 필요합니다." }, { status: 400 });
  }
  connectDB();
  try {
    const currentStudy = await Study.findById(studyId);

    if (!currentStudy) {
      return Response.json({ message: "스터디가 존재하지 않습니다" }, { status: 404 });
    }

    const currentStudyOwnerId = currentStudy.ownerId.toString();
    const user = await User.findById(userId);

    if (!user) {
      return Response.json({ message: "유저가 존재하지 않습니다" }, { status: 404 });
    }

    if (currentStudyOwnerId !== user.id) {
      return Response.json({ message: "권한이 없습니다" }, { status: 403 });
    }

    //구현 예정
  } catch (error: any) {
    if (error.name === "CastError") {
      return Response.json({ message: "요청을 처리할 수 없습니다." }, { status: 404 });
    } else {
      return Response.json({ message: error.name }, { status: 500 });
    }
  }
}
