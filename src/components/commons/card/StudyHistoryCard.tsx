import StudyMeetingInfo from "./element/StudyMeetingInfo";

export default function StudyHistoryCard() {
  return (
    <>
      <article className="flex flex-col py-6 px-5  rounded-lg bg-gray-100">
        <StudyMeetingInfo />
        <p className="mt-2  text-[#212121] text-[16px] font-semibold tracking-[-0.32px]">
          {"3시간만에 끝내는 AI그림 스터디"}
        </p>
      </article>
    </>
  );
}
