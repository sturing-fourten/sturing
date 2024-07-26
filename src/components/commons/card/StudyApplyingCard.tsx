"use client";

import { TMyStudy, TTeamMembersIdAddedMember } from "@/types/study";
import StudyApplyInfo from "./element/StudyApplyInfo";
import StudyCardButton from "./element/StudyCardButton";
import StudyMeetingInfo from "./element/StudyMeetingInfo";
import { getDateRange } from "@/utils/getDateRange";
import Link from "next/link";
import { format } from "date-fns";
import { useUserStore } from "@/store/userStore";
import { cancleApply, getApplication } from "@/lib/database/action/apply";
import { useRouter } from "next/navigation";

interface IStudyApplyingCardProps {
  study: TMyStudy;
}

const StudyApplyingCard = (props: IStudyApplyingCardProps) => {
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

  const { user } = useUserStore();
  const userId = user ? user._id.toString() : "";
  const router = useRouter();

  const handleCancleApply: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    if (studyId) {
      try {
        await cancleApply(studyId.toString(), userId);
        alert("지원 취소가 완료되었습니다.");
      } catch (error: any) {
        alert("지원 취소에 실패했습니다. 다시 시도해 주세요.");
      }
    }
  };

  const goToApplicationPage = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (studyId) {
      try {
        const application = await getApplication(studyId.toString(), userId);
        if (application) {
          router.push(`/application/${application._id}`);
        } else {
          console.error("지원서가 존재하지 않습니다.");
        }
      } catch (error) {
        console.error("지원서를 가져오는 중 오류가 발생했습니다:", error);
      }
    }
  };

  const dateRange = getDateRange(startDate, endDate);
  const where = (meetingFormat === "ONLINE" ? platform : location) ?? "";
  const status = (teamMembersId as TTeamMembersIdAddedMember)?.members?.[0].status;
  const myApplicationCreatedAt = applicationCreatedAt
    ? `${format(new Date(applicationCreatedAt), "yyyy.MM.dd HH:mm")} 지원`
    : "";

  return (
    <div className="flex flex-col gap-4 px-5 py-6 bg-white border border-gray-300 rounded-lg">
      <Link href={`/study/${studyId}`} className="flex flex-col gap-4">
        {/* {status && <StudyApplyInfo status={status} createAt={myApplicationCreatedAt} />} */}
        <StudyMeetingInfo
          format={meetingFormat === "ONLINE" ? "온라인" : "오프라인"}
          dateRange={dateRange}
          where={where}
          createAt={myApplicationCreatedAt}
        />
        <p className="text-[#212121] text-[16px] font-semibold tracking-[-0.32px]">{title}</p>
      </Link>
      <hr className="bg-gray-300" />
      <div className="flex gap-2">
        <StudyCardButton type="button" onClick={goToApplicationPage}>
          지원서 보기
        </StudyCardButton>
        <form onSubmit={handleCancleApply} className="w-full">
          <StudyCardButton type="submit">지원 취소</StudyCardButton>
        </form>
      </div>
    </div>
  );
};

export default StudyApplyingCard;
