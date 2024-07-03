import AlertMessage from "@/components/commons/AlertMessage";
import Button from "@/components/commons/Button";
import Link from "next/link";

export default function SuccessStep() {
  return (
    <div className="flex flex-col gap-[50px] h-dvh w-full">
      <div className="flex-1 flex justify-center items-center">
        <AlertMessage varient="apply" />
      </div>
      <Link href="/" className="py-3 px-4 fixed bottom-0 w-screen sm:w-[600px]">
        <Button
          varient="filled"
          addStyle="w-full h-[50px] rounded-[5px] bg-main-500 text-white font-semibold text-[16px]">
          확인
        </Button>
      </Link>
    </div>
  );
}
