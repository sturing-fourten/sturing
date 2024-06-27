import AlertMessage from "@/components/commons/AlertMessage";
import Button from "@/components/commons/Button";
import Link from "next/link";

export default function PreparingPage() {
  return (
    <div className="h-screen min-w-screen flex flex-col justify-center items-center relative">
      <AlertMessage varient="preparing" />
      <Link href="/" className="py-3 px-4 flex justify-center fixed bottom-0 w-screen sm:w-[600px]">
        <Button
          varient="filled"
          addStyle="w-full h-[50px] rounded-[5px] bg-main-500 text-white font-semibold text-[16px]">
          홈으로 가기
        </Button>
      </Link>
    </div>
  );
}
