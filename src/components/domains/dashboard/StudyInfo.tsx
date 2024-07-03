import TagBase from "@/components/commons/TagBase";
import Image from "next/image";
import { downArrowGray } from "@/../public/icons/icons";
import DetailInfo from "../detail/DetailInfo";
import { STUDY_RECRUIT_INFO } from "@/constant/study";
import LectureLinkBanner from "@/components/commons/LectureLinkBanner";

const { meeting, task, location } = STUDY_RECRUIT_INFO;

export default function StudyInfo() {
  return (
    <div className="pt-[10px] pb-11 px-4">
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

      <div className="mb-5 text-white text-xl font-semibold leading-7">{"UXUI 디자이너 본질 강화 피그마 스터디"}</div>

      <LectureLinkBanner href="" title="UXUI 디자이너가 피그마를 활용해 포트폴리오를 쌓는 법 A to Z" />

      <details className="">
        <summary className="absolute bottom-0 flex items-center justify-center w-[calc(100%-32px)] h-11 text-center list-none cursor-pointer">
          <Image src={downArrowGray} alt="" width={12} height={6} />
        </summary>

        <section className="flex flex-col gap-2 justify-start pt-4">
          <DetailInfo icon={meeting.icon} title={meeting.title} content="토요일 오후 8:00 온라인 진행" isWhite={true} />
          <DetailInfo icon={task.icon} title={task.title} content="스터디 게시판 사진 인증" isWhite={true} />
          <DetailInfo icon={location.icon} title={location.title} content="서울특별시 중구" isWhite={true} />
        </section>
      </details>
    </div>
  );
}
