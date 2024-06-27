import StudyApplyInfo from "./element/StudyApplyInfo";
import StudyCardButton from "./element/StudyCardButton";
import StudyMeetingInfo from "./element/StudyMeetingInfo";

export default function StudyApplyingCard({ status }: { status: "APPLIED" | "APPLIED_VIEW" | "ACCEPTED" }) {
  return (
    <article className="flex flex-col gap-4 px-5 py-6 bg-white border border-gray-300 rounded-lg">
      <StudyApplyInfo status={status} />
      <StudyMeetingInfo />
      <p className="text-[#212121] text-[16px] font-semibold tracking-[-0.32px]">
        {"소카 5개 프로젝트 디자인 실무 마스터 스터디"}
      </p>
      <hr className="bg-gray-300" />
      <div className="flex gap-2">
        <StudyCardButton>지원서 보기</StudyCardButton>
        <StudyCardButton>지원 취소</StudyCardButton>
      </div>
    </article>
  );
}
