import { TMyStudy, TTeamMembersIdAddedMember } from "@/types/study";
import StudyApplyInfo from "./element/StudyApplyInfo";
import StudyCardButton from "./element/StudyCardButton";
import StudyMeetingInfo from "./element/StudyMeetingInfo";
import { getDateRange } from "@/utils/getDateRange";
import Link from "next/link";
import { format } from "date-fns";

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
        format: meetingFormat,
        platform,
        location,
      },
      teamMembersId,
      applicationCreatedAt,
    },
  } = props;

  const dateRange = getDateRange(startDate, endDate);
  const where = (meetingFormat === "ONLINE" ? platform : location) ?? "";
  const status = (teamMembersId as TTeamMembersIdAddedMember)?.members?.[0].status;
  const myApplicationCreatedAt = applicationCreatedAt
    ? `${format(new Date(applicationCreatedAt), "yyyy.MM.dd HH:mm")} 지원`
    : "";

  return (
    <Link
      className="flex flex-col gap-4 px-5 py-6 bg-white border border-gray-300 rounded-lg"
      href={`/study/${studyId}`}>
      {status && <StudyApplyInfo status={status} createAt={myApplicationCreatedAt} />}
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
