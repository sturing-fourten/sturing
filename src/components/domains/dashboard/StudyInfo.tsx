import TagBase from "@/components/commons/TagBase";
import Image from "next/image";
import { downArrowGray } from "@/../public/icons/icons";

export default function StudyInfo() {
  const bg = `bg-[linear-gradient(0deg,#151515_0%,rgba(21,21,21,0.50)_100%),url('https://picsum.photos/200/300')]`;

  return (
    <section className={`relative pt-[10px] pb-11 px-4 bg-no-repeat bg-cover bg-top ${bg}`}>
      <div className="flex items-center gap-[10px] mb-[14px]">
        <div className="flex items-center gap-2">
          <TagBase className="bg-main-100 text-gray-700 border-transparent">오프라인</TagBase>
          <TagBase className="bg-main-100 text-gray-700 border-transparent">디자인</TagBase>
        </div>
        <div className="flex items-center text-gray-400 text-[12px] font-medium tracking-[-0.36px]">
          {"온라인"}
          <span className="w-[1px] h-3 mx-2 bg-gray-400"></span>
          {"06.01~08.01"}
        </div>
      </div>

      <div className="text-white text-xl font-semibold leading-7">{"study title"}</div>

      {/* TODO 강의 컴포넌트 추가 */}
      <details className="">
        <summary className="absolute bottom-0 flex items-center justify-center w-full h-11 text-center list-none cursor-pointer">
          <Image src={downArrowGray} alt="" width={12} height={6} />
        </summary>

        <div>{/* TODO 스터디 개요 컴포넌트 추가 */}스터디 개요 컴포넌트</div>
      </details>
    </section>
  );
}
