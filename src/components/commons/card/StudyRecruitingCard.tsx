import { getDateRange } from "@/utils/getDateRange";
import StudyCardLink from "./element/StudyCardLink";
import { StudyDetailInfo } from "./element/StudyDetailInfo";
import StudyMeetingInfo from "./element/StudyMeetingInfo";
import { TMyStudy, TTeamMembersIdAddedMember } from "@/types/study";

interface IStudyRecruitingCardProps {
  study: TMyStudy;
}

export default function StudyRecruitingCard(props: IStudyRecruitingCardProps) {
  const {
    study: {
      _id,
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

  const dateRange = getDateRange(startDate, endDate);
  const where = (format === "ONLINE" ? platform : location) ?? "";
  const meetingDay = day === "추후협의" ? day : `매주 ${day}`;
  const memberCount = (teamMembersId as TTeamMembersIdAddedMember)?.members?.length;

  return (
    <article className="py-6 px-5 border border-gray-300 bg-white rounded-lg">
      <StudyMeetingInfo format={"ONLINE" ? "온라인" : "오프라인"} dateRange={dateRange} where={where} />
      <p className="mt-2 text-gray-1000 text-[16px] font-semibold tracking-[-0.32px]">{title}</p>
      <hr className="my-4" />
      <StudyDetailInfo className="mb-4" meetingDay={meetingDay} task={"과제 없음"} memberCount={memberCount} />
      <StudyCardLink href={`/application-list/${_id}`}>지원서 리스트 보기</StudyCardLink>
    </article>
  );
}
