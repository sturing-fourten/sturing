import connectDB from "@/lib/database/db";
import { Study } from "@/schema/studySchema";
import { TeamMembers } from "@/schema/teamMemberSchema";
import { TMyStudyTabMenuLinkUnderlinedItem } from "@/types/study";

export async function GET(request: Request) {
  connectDB();
  const { searchParams } = new URL(request.url);
  const userId = searchParams.get("userId");

  try {
    const teamMembers = await TeamMembers.find({
      "members.userId": userId,
      $or: [{ "members.isOwner": true }, { "members.status": "ACCEPTED" }],
    });
    const studyIdList = teamMembers.map((member) => member.studyId);
    const [progressCount, waitingCount, doneCount] = await Promise.all([
      Study.countDocuments({ _id: { $in: studyIdList }, status: { $in: ["PROGRESS", "RECRUIT_END"] } }),
      Study.countDocuments({ _id: { $in: studyIdList }, status: "RECRUIT_START" }),
      Study.countDocuments({ _id: { $in: studyIdList }, status: "DONE" }),
    ]);
    const myStudyTabMenuList: TMyStudyTabMenuLinkUnderlinedItem[] = [
      { id: "progress", title: "진행", href: "/mystudy/progress", count: progressCount },
      { id: "waiting", title: "대기", href: "/mystudy/waiting", count: waitingCount },
      { id: "done", title: "완료", href: "/mystudy/done", count: doneCount },
    ];

    return Response.json(myStudyTabMenuList);
  } catch (error: any) {
    throw new Error(error);
  }
}