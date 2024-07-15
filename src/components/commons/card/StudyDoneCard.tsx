import Link from "next/link";
import StudyCardButton from "./element/StudyCardButton";
import StudyMeetingInfo from "./element/StudyMeetingInfo";
import StudyCardLink from "./element/StudyCardLink";
import { TMember, TMemberUserIdAddedUser, TStudy, TTeamMembersIdAddedMember } from "@/types/study";
import { getDateRange } from "@/utils/getDateRange";
import { getSession } from "@/lib/database/getSession";

interface IStudyDoneCardProps {
  study: TStudy;
}

export default async function StudyDoneCard(props: IStudyDoneCardProps) {
  const {
    study: {
      title,
      startDate,
      endDate,
      meeting: {
        schedule: { day },
        format,
        platform,
        location,
      },
      task,
      teamMembersId,
    },
  } = props;

  const session = await getSession();
  const myUserId = session?.user?.id;

  /**
   * @todo teamMembersId 타입 수정
   */
  const teamMemberList = (teamMembersId as TTeamMembersIdAddedMember)?.members?.filter(
    (member) => member.userId?._id.toString() !== myUserId,
  );

  const dateRange = getDateRange(startDate, endDate);
  const where = (format === "ONLINE" ? platform : location) ?? "";

  return (
    <article className="flex flex-col gap-5 py-6 px-5 border border-gray-300 rounded-lg bg-white">
      <div>
        <StudyMeetingInfo format={"ONLINE" ? "온라인" : "오프라인"} dateRange={dateRange} where={where} />
        <p className="mt-2 mb-3 text-[#212121] text-[16px] font-semibold tracking-[-0.32px]">{title}</p>
        <StudyCardLink href="/lecture/1/review">강의 후기 작성하기</StudyCardLink>
      </div>
      <hr className="bg-gray-300" />
      {teamMemberList.map((member) => (
        <TeamMemberReviewItem key={member.userId?._id.toString()} member={member} />
      ))}
      <StudyCardButton>내가 받은 후기 보기</StudyCardButton>
    </article>
  );
}

function TeamMemberReviewItem({ member }: { member: TMember }) {
  /**
   * @todo review 유무 연동
   */
  const review = false;
  const user = member.userId as TMemberUserIdAddedUser;
  return (
    <div className="flex items-center justify-between">
      <p className="text-[#212121] text-[14px] font-semibold tracking-[-0.42px]">{user.nickname}</p>

      {review ? (
        <button className="py-[6px] px-3 rounded-[5px] border border-gray-400 text-gray-700 text-[12px] font-medium tracking-[-0.36px]">
          작성 완료
        </button>
      ) : (
        <Link
          className="py-[6px] px-3 rounded-[5px] border border-main-500 text-main-500 text-[12px] font-medium tracking-[-0.36px]"
          href={"/member-review"}>
          팀원 후기 작성하기
        </Link>
      )}
    </div>
  );
}
