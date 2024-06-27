import StudyOnGoingCard from "@/components/commons/card/StudyOnGoingCard";
import { InsideMenu } from "@/components/commons/card/element/InsideMenu";

export default function ProcessTabPage() {
  const studyList = [
    { id: 1, isStarted: true },
    { id: 2, isStarted: true },
  ];
  return (
    <section className="pt-5 pb-10">
      <form className="flex gap-3 mb-4">
        <InsideMenu title="진행 중" number={2} isCurrent={true} />
        <InsideMenu title="진행 예정" number={1} isCurrent={false} />
      </form>

      <div className="flex flex-col gap-4">
        {studyList.map((study) => (
          <StudyOnGoingCard key={study.id} isStarted={study.isStarted} />
        ))}
      </div>
    </section>
  );
}
