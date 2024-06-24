import Button from "@/components/commons/Button";
import Image from "next/image";
import Link from "next/link";

export default function PreparingPage() {
  return (
    <div className="h-screen flex flex-col justify-center items-center relative">
      <Image
        src="icons/ready.svg"
        alt="챗팅 아이콘"
        width={62}
        height={62}
        className="animate-[spin_5s_linear_infinite]"
      />
      <div className="flex flex-col justify-center items-center mt-[13px]">
        <h1 className="text-[24px] font-semibold tracking-[-0.48px] leading-[36px]">서비스 준비 중입니다!</h1>
        <span className="text-[14px] text-gray-700 font-normal tracking-[-0.28px] leading-[21px] mt-[8px]">
          보다 더 나은 서비스 제공을 위하여 페이지 준비 중입니다.
        </span>
        <span className="text-[14px] text-gray-700 font-normal tracking-[-0.28px] leading-[21px]">
          빠른 시일 내에 준비하여 찾아뵙겠습니다.
        </span>
      </div>
      <Link href="/" className="py-3 px-4 fixed bottom-0">
        <Button type="filled" style="w-[343px] h-[50px] rounded-[5px] bg-main-500 text-white font-semibold text-[16px]">
          홈으로 가기
        </Button>
      </Link>
    </div>
  );
}
