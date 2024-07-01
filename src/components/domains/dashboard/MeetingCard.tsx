import DashboardCardTitle from "../DashboardCardTitle";

export default function MeetingCard() {
  return (
    <article className="flex flex-col justify-start items-start gap-3 py-6 px-5 rounded-lg border border-gray-300">
      <DashboardCardTitle title="06.08 (토)" />
      <p className="text-gray-1000 text-base font-semibold tracking-[-0.32px]">
        {"UXUI 디자이너 본질 강화 피그마 스터디"}
      </p>
      <div className="flex items-center gap-2 w-full p-2 border rounded-[3px] bg-gray-100 text-gray-700 text-[12px] font-semibold tracking-[-0.36px]">
        <span>{"스타벅스 종로점"}</span>
        <span className="w-[1px] h-3 bg-gray-400"></span>
        <span>
          {"06.07(토)"} {"오후 8:00 - 9:00"}
        </span>
      </div>
    </article>
  );
}
