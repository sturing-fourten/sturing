import StudyOnGoingCard from "@/components/commons/card/StudyOnGoingCard";

function InsideMenu(props: any) {
  const { title, number, isCurrent } = props;
  return (
    <button
      className={`
    inline-flex justify-start items-center gap-0.5 px-4 py-2 rounded border text-gray-900
    ${isCurrent ? "bg-main-100 border-main-300" : "bg-white A0B8FFborder-main-200"}
    `}>
      <span className="text-gray-900 text-sm font-medium leading-tight">{title}</span>
      <span className="text-gray-900 text-sm font-medium leading-tight">{number}</span>
    </button>
  );
}
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
