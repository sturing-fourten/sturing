import Image from "next/image";
import { TagLight } from "../tag/TagLight";

export default function UserCard() {
  return (
    <article className="flex flex-col items-center gap-[9px] w-full h-full whitespace-nowrap">
      <section className="flex flex-col items-center gap-[8px] bg-main-100 rounded-[5px] py-4 px-2">
        <Image
          src="icons/defaultProfileImg.svg"
          alt="유저 프로필 이미지"
          width={60}
          height={60}
          className="rounded-full"
        />
        <div className="flex flex-col items-center gap-[2px]">
          <span className="text-gray-1000 text-[16px] font-semibold leading-[24px] tracking-[-0.48px]">
            {"스터링윗미"}
          </span>
          <div className="flex justify-center items-center gap-[3px] px-[15px]">
            <Image src="icons/logo-blue.svg" alt="로고 이미지" width={10} height={13} />
            <span className="text-gray-700 text-[14px] font-medium leading-[22px] tracking-[-0.42px]">
              {"지수 95%"}
            </span>
          </div>
        </div>
      </section>
      <section className="flex justify-center items-center gap-2">
        <span className="text-gray-700 text-[12px] font-semibold leading-[18px] tracking-[-0.36px]">{"신입"}</span>
        <Image src="icons/bar-gray.svg" alt="바 아이콘" width={2} height={12} />
        <div className="flex items-center gap-[4px]">
          <span className="text-gray-700 text-[12px] font-medium leading-[18px] tracking-[-0.36px]">{"스터디"}</span>
          <span className="text-gray-700 text-[12px] font-semibold leading-[18px] tracking-[-0.36px]">{"9회"}</span>
        </div>
      </section>
      <section className="flex items-center gap-[4px]">
        <TagLight>{"자격증"}</TagLight>
        <TagLight>{"자기주도적"}</TagLight>
      </section>
    </article>
  );
}
