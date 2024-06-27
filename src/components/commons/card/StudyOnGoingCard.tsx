import { StudyDetailInfo } from "./element/StudyDetailInfo";
import StudyMeetingInfo from "./element/StudyMeetingInfo";

interface IStudyOnGoingCardProps {
  isStarted: boolean;
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
