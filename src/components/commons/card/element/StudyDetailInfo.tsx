import Image from "next/image";
import { teammate, schedule, checkSquare } from "@/../public/icons/icons";

interface IStudyDetailInfoProps {
  className?: string;
  meetingDay: string;
  memberCount: number;
  task: string;
}
export function StudyDetailInfo(props: IStudyDetailInfoProps) {
  const { className, meetingDay, memberCount, task } = props;
  return (
    <section
      className={`flex justify-evenly items-center p-2 rounded-[3px] bg-gray-100 text-gray-1000 text-[14px] font-medium tracking-[-0.42px] ${className}`}>
      <div className="flex gap-1">
        <Image src={teammate} alt="teammate icon" width={18} height={18} />
        팀원 {memberCount}명
      </div>
      <span className="w-[1px] h-3 bg-gray-400"></span>
      <div className="flex gap-1">
        <Image src={schedule} alt="teammate icon" width={18} height={18} />
        {meetingDay}
      </div>
      <span className="w-[1px] h-3 bg-gray-400"></span>
      <div className="flex gap-1">
        <Image src={checkSquare} alt="teammate icon" width={18} height={18} />
        {task}
      </div>
    </section>
  );
}
