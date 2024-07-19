import connectDB from "@/lib/database/db";
import { Lecture } from "@/schema/lectureSchema";
import { Study } from "@/schema/studySchema";
import { TeamMembers } from "@/schema/teamMemberSchema";
import { TStudyListData } from "@/types/api/study";

export async function GET(req: Request, { params }: { params: { id: string } }) {
  const id = params.id;

  try {
    await connectDB();
    const lecture = await Lecture.findById(id);
    if (!lecture) {
      return Response.json({ message: "해당 강의가 존재하지 않습니다." }, { status: 404 });
    }

    const relatedStudyListData = await Study.find({ lectureId: id, status: "RECRUIT_START" });

    let relatedStudyList: TStudyListData = [];

    //isBookmark 추가 예정.
    if (relatedStudyListData) {
      relatedStudyList = await Promise.all(
        relatedStudyListData.map(async (study) => {
          const { _id, ownerId, category, title, imageUrl, startDate, endDate, meeting, wantedMember } = study;
          const acceptedTeamMembers = await TeamMembers.findOne({ studyId: _id, "members.status": "ACCEPTED" });
          const acceptedCount = acceptedTeamMembers ? acceptedTeamMembers.members.length : 0;
          const wantedMemberCount = wantedMember?.count || "제한없음";
          return {
            id: _id.toString(),
            ownerId,
            category,
            title,
            imageUrl,
            startDate,
            endDate,
            meeting,
            wantedMemberCount,
            acceptedTeamMemberCount: acceptedCount,
          };
        }),
      );
    }

    return Response.json({ lecture, relatedStudyList });
  } catch (error: any) {
    return Response.json({ message: "강의를 불러오는데 실패하였습니다." }, { status: 500 });
  }
}
