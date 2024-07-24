"use client";

import { TMyStudy, TTeamMembersIdAddedMember } from "@/types/study";
import StudyApplyInfo from "./element/StudyApplyInfo";
import StudyCardButton from "./element/StudyCardButton";
import StudyMeetingInfo from "./element/StudyMeetingInfo";
import { getDateRange } from "@/utils/getDateRange";
import Link from "next/link";
import { format } from "date-fns";
import { useUserStore } from "@/store/userStore";

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

  const cancleApply = async (studyId: string) => {
    try {
      const response = await fetch(`/api/study/${studyId}/apply-cancel`, {
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + userId,
        },
        next: { revalidate: 10 },
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "지원 취소하기 실패");
      }
    } catch (error: any) {
      console.error("Error fetching Image:", error.message);
      throw error;
    }
  };

  const handleCancleApply = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (studyId) {
      try {
        await cancleApply(studyId.toString());
        alert("지원 취소가 완료되었습니다.");
      } catch (error: any) {
        alert("지원 취소에 실패했습니다. 다시 시도해 주세요.");
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
    <Link
      className="flex flex-col gap-4 px-5 py-6 bg-white border border-gray-300 rounded-lg"
      href={`/study/${studyId}`}>
      {status && <StudyApplyInfo status={status} createAt={myApplicationCreatedAt} />}
      <StudyMeetingInfo format={"ONLINE" ? "온라인" : "오프라인"} dateRange={dateRange} where={where} />
      <p className="text-[#212121] text-[16px] font-semibold tracking-[-0.32px]">{title}</p>
      <hr className="bg-gray-300" />
      <div className="flex gap-2">
        <StudyCardButton>지원서 보기</StudyCardButton>
        <StudyCardButton onClick={handleCancleApply}>지원 취소</StudyCardButton>
      </div>
    </Link>
  );
};

export default StudyApplyingCard;
