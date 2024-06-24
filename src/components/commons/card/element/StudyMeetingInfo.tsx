interface IStudyMeetingInfoProps {}

export default function StudyMeetingInfo(props: IStudyMeetingInfoProps) {
  return (
    <section className="flex text-gray-700 text-[12px] font-medium tracking-[-0.36px]">
      {"온라인"}
      <span className="w-[1px] h-3 mx-2 bg-gray-400"></span>
      {"06.01~08.01"}
      <span className="w-[1px] h-3 mx-2 bg-gray-400"></span>
      {"ZOOM"}
    </section>
  );
}
