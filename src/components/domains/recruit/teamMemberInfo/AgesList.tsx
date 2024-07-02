import DefaultToggle from "@/components/commons/toggle/DefaultToggle";
import { AGE_LIST } from "@/constant/teamMemberInfo";

interface AgesListProps {
  selectedAges: string[];
  handleAgesToggle: (Ages: string) => void;
}

export default function AgesList({ selectedAges, handleAgesToggle }: AgesListProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {Object.keys(AGE_LIST).map((key) => (
        <DefaultToggle
          key={key}
          toggleSize="w-[109px] h-[42px]"
          isActive={selectedAges.includes(AGE_LIST[key])}
          onClick={() => handleAgesToggle(AGE_LIST[key])}>
          {AGE_LIST[key]}
        </DefaultToggle>
      ))}
    </div>
  );
}
