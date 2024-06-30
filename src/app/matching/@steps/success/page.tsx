import AlertMessage from "@/components/commons/AlertMessage";
import Button from "@/components/commons/Button";
import SuccessContent from "@/components/domains/matching/SuccessContent";

export default function SuccessStepPage() {
  return (
    <div className="flex flex-col gap-[50px] min-h-screen w-full">
      <AlertMessage varient="matching" />
      <SuccessContent />
      <div className="sticky bottom-0 py-4 bg-white flex flex-col gap-3 mt-[70px]">
        <Button
          varient="filled"
          addStyle="w-full h-[50px] bg-main-500 rounded-[5px] shrink-0 text-white font-semibold text-4">
          내 프로필 보러가기
        </Button>
        <Button
          varient="filled"
          addStyle="w-full h-[50px] bg-main-100 rounded-[5px] shrink-0 text-main-500 font-semibold text-4">
          홈으로 가기
        </Button>
      </div>
    </div>
  );
}
