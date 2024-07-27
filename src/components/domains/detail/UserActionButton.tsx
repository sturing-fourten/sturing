"use client";
import Button from "@/components/commons/Button";
import userActionButtonConfig from "@/constant/userActionButtonConfig";
import { cancleApply } from "@/lib/database/action/apply";
import { deleteMember, endRecurit } from "@/lib/database/action/teamMemberStatus";
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
    case userId === studyData?.ownerId:
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
    case studyData?.status === "RECURIT_END" || studyData?.status === "PROGRESS" || studyData?.status === "DONE":
      userStatus = "RECRUIT_END";
      userAction = undefined;
    default:
      userStatus = "NOT_APPLIED";
      userAction = undefined;
  }

  const buttonConfig = page === "lecture" ? userActionButtonConfig.lecture : userActionButtonConfig.study[userStatus];

  const goToApplyPage = () => {
    if (userStatus === "NOT_APPLIED") {
      router.push(`/apply/${id}`); // 지원서 작성 페이지로 연결, 스터디 아이디 가져가야함
    }
  };

  const recruitStudy = () => {
    router.push(`/recruit?lectureId=${id}`); //강의 아이디 저장해서 모집할때 써야함
  };

  const handleCancleApply: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    if (studyData?._id) {
      try {
        await cancleApply(studyData?._id.toString(), userId);
        alert("지원 취소가 완료되었습니다.");
      } catch (error: any) {
        alert("지원 취소에 실패했습니다. 다시 시도해 주세요.");
      }
    }
  };

  return (
    <>
      <form action={userAction} onSubmit={userStatus === "APPLIED" ? handleCancleApply : undefined} className="w-full">
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
