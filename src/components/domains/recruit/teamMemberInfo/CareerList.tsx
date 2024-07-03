import DefaultToggle from "@/components/commons/toggle/DefaultToggle";
import { CAREER_LIST } from "@/constant/teamMemberInfo";

interface CareerListProps {
  selectedCareer: string[];
  handleCareerToggle: (career: string) => void;
}

export default function CareerList({ selectedCareer, handleCareerToggle }: CareerListProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {Object.keys(CAREER_LIST).map((key) => (
        <DefaultToggle
          key={key}
          toggleSize="w-fit h-[33px]"
          isActive={selectedCareer.includes(CAREER_LIST[key])}
          onClick={() => handleCareerToggle(CAREER_LIST[key])}>
          {CAREER_LIST[key]}
        </DefaultToggle>
      ))}
    </div>
  );
}
