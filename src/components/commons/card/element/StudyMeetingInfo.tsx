interface IStudyMeetingInfoProps {
  format: "온라인" | "오프라인";
  dateRange: string;
  where: string;
}

export default function StudyMeetingInfo(props: IStudyMeetingInfoProps) {
  const { format, dateRange, where } = props;
  return (
    <section className="flex items-center text-gray-700 text-[12px] font-medium tracking-[-0.36px]">
      {format}
      <span className="w-[1px] h-3 mx-2 bg-gray-400"></span>
      {dateRange}
      <span className="w-[1px] h-3 mx-2 bg-gray-400"></span>
      {where}
    </section>
  );
}
