import Button from "@/components/commons/Button";
import userActionButtonConfig from "@/constant/userActionButtonConfig";

interface UserActionButtonProps {
  page: "lecture" | "study";
}

export default function UserActionButton({ page }: UserActionButtonProps) {
  const userStatus = "NOT_APPLIED"; //임시
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
