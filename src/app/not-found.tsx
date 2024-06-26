import Button from "@/components/commons/Button";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <Image src="icons/404.svg" alt="챗팅 아이콘" width={62} height={62} />
      <div className="flex flex-col justify-center items-center mt-[13px]">
        <h1 className="text-[24px] font-semibold tracking-[-0.48px] leading-[36px]">페이지를 찾을 수 없습니다.</h1>
        <span className="text-[14px] text-gray-700 font-normal tracking-[-0.28px] leading-[21px] mt-[8px]">
          페이지의 주소가 잘못 입력되었거나,
        </span>
        <span className="text-[14px] text-gray-700 font-normal tracking-[-0.28px] leading-[21px]">
          주소가 변경 혹은 삭제되어
        </span>
        <span className="text-[14px] text-gray-700 font-normal tracking-[-0.28px] leading-[21px]">
          요청하신 페이지를 찾을 수 없습니다.
        </span>
      </div>
      <Link href="/" className="py-3 px-4 fixed bottom-0">
        <Button
          varient="filled"
          addStyle="w-[343px] h-[50px] rounded-[5px] bg-main-500 text-white font-semibold text-[16px]">
          홈으로 가기
        </Button>
      </Link>
    </div>
  );
}
