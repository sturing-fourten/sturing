import Button from "@/components/commons/Button";

export default function UserActionButton() {
  return (
    <>
      <form action="" className="w-full">
        <Button varient="filled" addStyle="bg-main-500 w-full h-[50px] text-white rounded-[5px]">
          이 강의로 스터디 개설하기
        </Button>
      </form>
    </>
  );
}
