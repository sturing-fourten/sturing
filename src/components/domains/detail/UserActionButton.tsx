import Button from "@/components/commons/Button";
import userActionButtonConfig from "@/constant/userActionButtonConfig";
import { TStudyDetailInfoData } from "@/types/api/study";

interface UserActionButtonProps {
  page: "lecture" | "study";
  userId: string;
  study: TStudyDetailInfoData;
}

export default function UserActionButton({ page, userId, study }: UserActionButtonProps) {
  let userStatus: keyof typeof userActionButtonConfig.study;
  const teamMemberInfo = study?.teamMemberList?.find((member) => member.memberId === userId);

  switch (true) {
    case userId === study?.study.ownerId:
      userStatus = "OWNER";
      break;
    case teamMemberInfo?.status === "ACCEPTED":
      userStatus = "ACCEPTED";
      break;
    case teamMemberInfo?.status === "APPLIED" || teamMemberInfo?.status === "APPLIED_VIEW":
      userStatus = "APPLIED";
      break;
    default:
      userStatus = "NOT_APPLIED";
  }

  const buttonConfig = page === "lecture" ? userActionButtonConfig.lecture : userActionButtonConfig.study[userStatus];

  return (
    <>
      <form action="" className="w-full">
        <Button
          varient="filled"
          addStyle="bg-main-500 w-full h-[50px] text-white rounded-[5px]"
          disabled={buttonConfig.disabled}>
          {buttonConfig.text}
        </Button>
      </form>
    </>
  );
}
