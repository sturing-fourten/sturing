import Image from "next/image";
import { teammate, schedule, checkSquare } from "@/../public/icons/icons";
import StudyMeetingInfo from "./element/StudyMeetingInfo";

interface IStudyOnGoingCardProps {
  isStarted: boolean;
}

function StudyDetailInfo() {
  return (
    <section className="flex justify-evenly items-center p-2 rounded-[3px] bg-white text-gray-1000 text-[14px] font-medium tracking-[-0.42px]">
      <div className="flex gap-1">
        <Image src={teammate} alt="teammate icon" width={18} height={18} />
        {"팀원 4명"}
      </div>
      <span className="w-[1px] h-3 bg-gray-400"></span>
      <div className="flex gap-1">
        <Image src={schedule} alt="teammate icon" width={18} height={18} />
        {"매주 토요일"}
      </div>
      <span className="w-[1px] h-3 bg-gray-400"></span>
      <div className="flex gap-1">
        <Image src={checkSquare} alt="teammate icon" width={18} height={18} />
        {"사진 인증"}
      </div>
    </section>
  );
}
export default function StudyOnGoingCard({ isStarted }: IStudyOnGoingCardProps) {
  return (
    <article
      className={`py-6 px-5 border border-gray-300 bg-white rounded-lg ${
        isStarted ? "bg-gradient-to-br from-[#D9E3FF]/70 to-[#FFE4E0]/70" : "bg-white"
      }`}>
      <StudyMeetingInfo />
      <p className="mt-2 text-gray-1000 text-[16px] font-semibold tracking-[-0.32px]">
        {"쏘카 5개 프로젝트 디자인 실무 마스터 스터디"}
      </p>
      <hr className="my-4" />
      <StudyDetailInfo />
    </article>
  );
}
