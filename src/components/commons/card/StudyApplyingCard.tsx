import { TMyStudy, TTeamMembersIdAddedMember } from "@/types/study";
import StudyApplyInfo from "./element/StudyApplyInfo";
import StudyCardButton from "./element/StudyCardButton";
import StudyMeetingInfo from "./element/StudyMeetingInfo";
import { getDateRange } from "@/utils/getDateRange";
import { getSession } from "@/lib/database/getSession";
import Link from "next/link";

interface IStudyApplyingCardProps {
  study: TMyStudy;
}

export default async function StudyApplyingCard(props: IStudyApplyingCardProps) {
  const {
    study: {
      _id: studyId,
      title,
      startDate,
      endDate,
      meeting: {
        schedule: { day },
        format,
        platform,
        location,
      },
      teamMembersId,
    },
  } = props;

  const session = await getSession();
  const userId = session?.user?.id;

  const dateRange = getDateRange(startDate, endDate);
  const where = (format === "ONLINE" ? platform : location) ?? "";
  const status = (teamMembersId as TTeamMembersIdAddedMember)?.members?.find(
    (member) => member.userId?._id.toString() !== userId,
  )?.status;

  return (
    <Link
      className="flex flex-col gap-4 px-5 py-6 bg-white border border-gray-300 rounded-lg"
      href={`/study/${studyId}`}>
      {status && <StudyApplyInfo status={status} />}
      <StudyMeetingInfo format={"ONLINE" ? "온라인" : "오프라인"} dateRange={dateRange} where={where} />
      <p className="text-[#212121] text-[16px] font-semibold tracking-[-0.32px]">{title}</p>
      <hr className="bg-gray-300" />
      <div className="flex gap-2">
        <StudyCardButton>지원서 보기</StudyCardButton>
        <StudyCardButton>지원 취소</StudyCardButton>
      </div>
    </Link>
  );
}
