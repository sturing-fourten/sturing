import TopBar from "@/components/commons/TopBar";
import StudyApplicationCard from "@/components/commons/card/StudyApplicationCard";
import StudyMeetingInfo from "@/components/commons/card/element/StudyMeetingInfo";

export default function AppliedListPage() {
  return (
    <>
      <TopBar variant="back">받은 스터디 지원서</TopBar>
      <section className="py-5 px-4">
        <article className="flex flex-col gap-2 py-6 px-5 border border-gray-300 rounded-lg bg-white">
          <StudyMeetingInfo />
          <p className="mt-2 text-gray-1000 text-[16px] font-semibold tracking-[-0.32px]">
            {"쏘카 5개 프로젝트 디자인 실무 마스터 스터디"}
          </p>
        </article>

        <hr className="bg-gray-300 my-4" />

        <ul className="flex flex-col gap-4">
          {[1, 2, 3].map((item, index) => (
            <li key={index}>
              <StudyApplicationCard status="APPLIED" />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
