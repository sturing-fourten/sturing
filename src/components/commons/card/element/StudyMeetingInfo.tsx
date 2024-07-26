interface IStudyMeetingInfoProps {
  format: "온라인" | "오프라인";
  dateRange: string;
  where: string;
  createAt?: string;
}

export default function StudyMeetingInfo(props: IStudyMeetingInfoProps) {
  const { format, dateRange, where, createAt } = props;
  return (
    <section className="flex justify-between">
      <div className="flex items-center text-gray-700 text-[12px] font-medium tracking-[-0.36px]">
        {format}
        <span className="w-[1px] h-3 mx-2 bg-gray-400"></span>
        {dateRange}
        <span className="w-[1px] h-3 mx-2 bg-gray-400"></span>
        {where}
      </div>
      <span className="text-main-400 text-[12px] font-normal tracking-[-0.36px]">{createAt}</span>
    </section>
  );
}
