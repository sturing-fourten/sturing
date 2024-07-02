import DefaultToggle from "@/components/commons/toggle/DefaultToggle";
import { ASSIGNMENT_LIST } from "@/constant/studyDetail";

interface StudyAssignmentToggleProps {
  selectedAssignment: string[];
  handleAssignmentToggle: (assignment: string) => void;
}

export default function StudyAssignmentToggle({
  selectedAssignment,
  handleAssignmentToggle,
}: StudyAssignmentToggleProps) {
  return (
    <div className="w-full flex gap-[6px]">
      {Object.keys(ASSIGNMENT_LIST).map((key) => (
        <DefaultToggle
          key={key}
          toggleSize="w-full h-[42px]"
          isActive={selectedAssignment.includes(ASSIGNMENT_LIST[key])}
          onClick={() => handleAssignmentToggle(ASSIGNMENT_LIST[key])}>
          {ASSIGNMENT_LIST[key]}
        </DefaultToggle>
      ))}
    </div>
  );
}
