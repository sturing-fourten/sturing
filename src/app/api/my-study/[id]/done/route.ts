import connectDB from "@/lib/database/db";
import { Study } from "@/schema/studySchema";
import { TeamMembers } from "@/schema/teamMemberSchema";
import { User } from "@/schema/userSchema";
import { Types } from "mongoose";

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
  const studyId = params.id;
  const token = req.headers.get("Authorization");
  const userId = token?.split(" ")[1];

  if (!studyId) {
    return Response.json({ error: "스터디 id 가 필요합니다." }, { status: 400 });
  }
  if (!userId) {
    return Response.json({ error: "유저 id 가 필요합니다." }, { status: 400 });
  }
  try {
    await connectDB();
    const currentStudy = await Study.findById(studyId);

    if (!currentStudy) {
      return Response.json({ message: "스터디가 존재하지 않습니다" }, { status: 404 });
    }

    const currentStudyOwnerId = currentStudy.ownerId.toString();
    const user = await User.findById(userId);

    if (!user) {
      return Response.json({ message: "존재하지 않는 유저입니다" }, { status: 404 });
    }

    if (currentStudyOwnerId !== user.id) {
      return Response.json({ message: "권한이 없습니다" }, { status: 403 });
    }

    const isAlreadyDone = await Study.findOne({ _id: studyId, status: "DONE" });

    if (isAlreadyDone) {
      return Response.json({ message: "이미 완료된 스터디입니다." }, { status: 400 });
    }

    const teamMembers = await TeamMembers.findOne({ studyId });
    const acceptedTeamMembers = teamMembers.members.filter(({ status }: { status: string }) => {
      return status === "ACCEPTED";
    });
    await Promise.all(
      acceptedTeamMembers.map(async ({ userId }: { userId: Types.ObjectId }) => {
        await User.updateOne({ _id: userId, sturingIndex: { $lt: 96 } }, { $inc: { sturingIndex: 5 } });
      }),
    );
    await Study.updateOne({ _id: studyId }, { status: "DONE" });
    return Response.json({ message: "스터디가 완료 되었습니다." }, { status: 200 });
  } catch (error: any) {
    if (error.name === "CastError") {
      return Response.json({ message: "요청을 처리할 수 없습니다." }, { status: 404 });
    } else {
      return Response.json({ error }, { status: 500 });
    }
  }
}
