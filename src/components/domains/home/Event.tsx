import Button from "@/components/commons/Button";
import { IMAGES_BANNER } from "@/constant/images";
import Link from "next/link";
import Image from "next/image";

export default function Event() {
  return (
    <>
      <div className="flex flex-col gap-[20px] w-full pr-[16px] pl-[16px]">
        <div className="flex flex-col full gap-1">
          <span className="text-gray-1000 text-[18px] font-semibold tracking-[-0.54px] leading-[24px]">
            스터링 환급 챌린지
          </span>
          <span className="text-[12px] text-gray-700 font-normal leading-[18px] tracking-[-0.24px]">
            팀원과 함께 2주 집중 스터디, 성공 시 스터디원 전원 지급!
          </span>
        </div>
        <Image
          src={IMAGES_BANNER.challenge.src}
          alt={IMAGES_BANNER.challenge.alt}
          width={343}
          height={159}
          className="w-full"
        />
        <Link href="/preparing">
          <Button
            varient="ghost"
            addStyle="border border-gray-400 rounded-[5px] w-full h-[50px] py-[14px] px-[20px] shrink-0 text-gray-1000 text-[16px] font-semibold leading-[24px] tracking-[-0.48px]">
            챌린지 보러가기
          </Button>
        </Link>
      </div>
    </>
  );
}
