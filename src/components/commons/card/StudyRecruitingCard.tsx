import StudyCardButton from "./element/StudyCardButton";
import { StudyDetailInfo } from "./element/StudyDetailInfo";
import StudyMeetingInfo from "./element/StudyMeetingInfo";

export default function StudyRecruitingCard() {
  return (
    <article className="py-6 px-5 border border-gray-300 bg-white rounded-lg">
      <StudyMeetingInfo />
      <p className="mt-2 text-gray-1000 text-[16px] font-semibold tracking-[-0.32px]">
        {"쏘카 5개 프로젝트 디자인 실무 마스터 스터디"}
      </p>
      <hr className="my-4" />
      <StudyDetailInfo className="mb-4" />
      <StudyCardButton>지원서 리스트 보기</StudyCardButton>
    </article>
  );
}
