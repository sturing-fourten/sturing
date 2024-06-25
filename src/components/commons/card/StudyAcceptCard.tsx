import Image from "next/image";
import StudyApplyInfo from "./element/StudyApplyInfo";
import { business as sampleImage } from "../../../../public/icons/icons";
import StudyCardButton from "./element/StudyCardButton";

export default function StudyAcceptCard({ status }: { status: "APPLIED" | "APPLIED_VIEW" | "ACCEPTED" }) {
  return (
    <article className="flex flex-col gap-4 px-5 py-6 bg-white border border-gray-300 rounded-lg">
      <StudyApplyInfo status={status} />
      <p className="text-gray-1000 text-[14px] font-semibold tracking-[-0.42px]">
        {"소카 5개 프로젝트 디자인 실무 마스터 스터디"}
      </p>
      <hr className="bg-gray-300" />
      <section className="flex items-center justify-stretch gap-3">
        <Image
          className="rounded-[40px] overflow-hidden"
          src={sampleImage}
          alt="스터디 개설자 유저 프로필"
          width={40}
          height={40}
        />
        <div>
          <div className="flex items-center gap-2 text-[12px] font-medium tracking-[-0.36px]">
            <span className="text-gray-700">{"피그마마스터"}</span>
            <span className="w-[1px] h-3 bg-gray-400"></span>
            <span className="text-gray-600">{"비기너"}</span>
          </div>
          <p className="text-[12px] font-semibold tracking-[-0.36px] text-gray-900">
            {"안녕하세요 쏘카 실무 마스터 스터디 지원합니다."}
          </p>
        </div>
      </section>
      <StudyCardButton>지원서 보기</StudyCardButton>
    </article>
  );
}
