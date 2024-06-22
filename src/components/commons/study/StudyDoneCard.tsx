import StudyCardButton from "./StudyCardButton";
import StudyMeetingInfo from "./StudyMeetingInfo";

export default function StudyDoneCard() {
  return (
    <article className="flex flex-col gap-5 py-6 px-5 border border-gray-300 rounded-lg bg-white">
      <div>
        <StudyMeetingInfo />
        <p className="mt-2 mb-3 text-[#212121] text-[16px] font-semibold tracking-[-0.32px]">
          {"3시간만에 끝내는 AI그림 스터디"}
        </p>
        <StudyCardButton>지원서 보기</StudyCardButton>
      </div>
      <hr />
      <div className="flex items-center justify-between">
        <p className="text-[#212121] text-[14px] font-semibold tracking-[-0.42px]">{"페퍼솔트님"}</p>
        <button className="py-[6px] px-3 rounded-[5px] border border-main-500 text-main-500 text-[12px] font-medium tracking-[-0.36px]">
          팀원 후기 작성하기
        </button>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-[#212121] text-[14px] font-semibold tracking-[-0.42px]">{"페퍼솔트님"}</p>
        <button className="py-[6px] px-3 rounded-[5px] border border-gray-400 text-gray-700 text-[12px] font-medium tracking-[-0.36px]">
          작성 완료
        </button>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-[#212121] text-[14px] font-semibold tracking-[-0.42px]">{"페퍼솔트님"}</p>
        <button className="py-[6px] px-3 rounded-[5px] border border-gray-400 text-gray-700 text-[12px] font-medium tracking-[-0.36px]">
          작성 완료
        </button>
      </div>
    </article>
  );
}
