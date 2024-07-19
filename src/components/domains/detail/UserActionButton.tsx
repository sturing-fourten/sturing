"use client";
import Button from "@/components/commons/Button";
import userActionButtonConfig from "@/constant/userActionButtonConfig";
import { deleteMember, endRecurit } from "@/lib/database/action/teamMemberStatus";
import { TStudyDetailInfoData } from "@/types/api/study";
import { useRouter } from "next/navigation";

interface UserActionButtonProps {
  page: "lecture" | "study";
  userId: string;
  study: TStudyDetailInfoData;
}

export default function UserActionButton({ page, userId, study }: UserActionButtonProps) {
  const router = useRouter();
  let userStatus: keyof typeof userActionButtonConfig.study;
  let userAction;
  const teamMemberInfo = study?.teamMemberList?.find((member) => member.memberId === userId);
  const studyData = study.study;

  switch (true) {
    case userId === studyData.ownerId:
      userStatus = "OWNER";
      userAction = endRecurit;
      break;
    case teamMemberInfo?.status === "ACCEPTED":
      userStatus = "ACCEPTED";
      userAction = deleteMember;
      break;
    case teamMemberInfo?.status === "APPLIED" || teamMemberInfo?.status === "APPLIED_VIEW":
      userStatus = "APPLIED";
      userAction = deleteMember;
      break;
    case studyData.status === "RECURIT_END" || studyData.status === "PROGRESS" || studyData.status === "DONE":
      userStatus = "RECRUIT_END";
      userAction = undefined;
    default:
      userStatus = "NOT_APPLIED";
      userAction = undefined;
  }

  const buttonConfig = page === "lecture" ? userActionButtonConfig.lecture : userActionButtonConfig.study[userStatus];

  const goToApplyPage = () => {
    if (userStatus === "NOT_APPLIED") {
      router.push("/"); // 지원서 작성 페이지로 연결
    }
  };

  return (
    <>
      <form action={userAction} className="w-full">
        <input hidden name="studyId" defaultValue={studyData._id} />
        <input hidden name="memberId" defaultValue={teamMemberInfo?.memberId} />
        <Button
          type={userStatus === "NOT_APPLIED" ? "button" : "submit"}
          varient="filled"
          addStyle="bg-main-500 w-full h-[50px] text-white rounded-[5px]"
          disabled={buttonConfig.disabled}
          onClick={goToApplyPage}>
          {buttonConfig.text}
        </Button>
      </form>
    </>
  );
}
