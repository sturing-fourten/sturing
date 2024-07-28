"use client";
import Button from "@/components/commons/Button";
import userActionButtonConfig from "@/constant/userActionButtonConfig";
import { cancelApply } from "@/lib/database/action/apply";
import { endRecruit, leaveTeamMember } from "@/lib/database/action/teamMemberStatus";
import { TStudyDetailInfoData } from "@/types/api/study";
import { useParams, useRouter } from "next/navigation";

interface UserActionButtonProps {
  page: "lecture" | "study";
  userId: string;
  study?: TStudyDetailInfoData;
}

export default function UserActionButton({ page, userId, study }: UserActionButtonProps) {
  const router = useRouter();
  const { id } = useParams();

  let userStatus: keyof typeof userActionButtonConfig.study;
  let userAction;
  const teamMemberInfo = study?.teamMemberList?.find((member) => member?.memberId === userId);
  const studyData = study?.study;

  switch (true) {
    case userId === studyData?.ownerId && studyData?.status === "RECRUIT_START":
      userStatus = "OWNER";
      userAction = endRecruit;
      break;
    case userId === studyData?.ownerId && studyData?.status !== "RECRUIT_START":
      userStatus = "RECRUIT_END";
      userAction = undefined;
      break;
    case teamMemberInfo?.status === "ACCEPTED" && studyData?.status === "RECRUIT_START":
      userStatus = "ACCEPTED";
      userAction = leaveTeamMember;
      break;
    case (teamMemberInfo?.status === "APPLIED" || teamMemberInfo?.status === "APPLIED_VIEW") &&
      studyData?.status === "RECRUIT_START":
      userStatus = "APPLIED";
      userAction = leaveTeamMember;
      break;
    case studyData?.status === "RECRUIT_END" || studyData?.status === "PROGRESS" || studyData?.status === "DONE":
      userStatus = "RECRUIT_END";
      userAction = undefined;
      break;
    default:
      userStatus = "NOT_APPLIED";
      userAction = undefined;
  }

  const buttonConfig = page === "lecture" ? userActionButtonConfig.lecture : userActionButtonConfig.study[userStatus];

  const goToApplyPage = () => {
    if (userStatus === "NOT_APPLIED") {
      router.push(`/apply/${id}`);
    }
  };

  const recruitStudy = () => {
    router.push(`/recruit?lectureId=${id}`);
  };

  const handleCancelApply: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    if (studyData?._id) {
      try {
        await cancelApply(studyData?._id.toString(), userId);
        alert("지원 취소가 완료되었습니다.");
      } catch (error: any) {
        alert("지원 취소에 실패했습니다. 다시 시도해 주세요.");
      }
    }
  };

  return (
    <>
      <form action={userAction} onSubmit={userStatus === "APPLIED" ? handleCancelApply : undefined} className="w-full">
        <input hidden name="studyId" defaultValue={studyData?._id} />
        <input hidden name="memberId" defaultValue={teamMemberInfo?.memberId} />
        <Button
          type={userStatus === "NOT_APPLIED" ? "button" : "submit"}
          varient="filled"
          addStyle="bg-main-500 w-full h-[50px] text-white rounded-[5px]"
          disabled={buttonConfig.disabled}
          onClick={page === "study" ? goToApplyPage : recruitStudy}>
          {buttonConfig.text}
        </Button>
      </form>
    </>
  );
}
