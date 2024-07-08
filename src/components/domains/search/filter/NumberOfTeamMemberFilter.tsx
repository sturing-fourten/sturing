import { useState } from "react";
import NumberOfTeamMember from "../../recruit/teamMemberInfo/NumberOfTeamMember";
import OptionalToggle from "../../recruit/commons/OptionalToggle";

export default function NumberOfTeamMemberFilter() {
  const [isInfinity, setIsInfinity] = useState<boolean>(false);
  const [numberOfTeamMembers, setNumberOfTeamMembers] = useState<number>(1);
  const handleInfiniteNumber = () => {
    setIsInfinity((prev) => !prev);
  };
  const handleMinusNumber = () => {
    setNumberOfTeamMembers((prev) => {
      if (prev > 1) {
        return prev - 1;
      }
      return prev;
    });
  };

  const handlePlusNumber = () => {
    setNumberOfTeamMembers((prev) => prev + 1);
  };
  return (
    <>
      <div className="flex-col inline-flex gap-[13px] w-full">
        <div className="text-gray-800 text-sm sm:text-base font-medium leading-snug">
          {"함께하고 싶은 팀원 수 (본인 포함)"}
        </div>
        <NumberOfTeamMember
          isInfinity={isInfinity}
          handleMinusNumber={handleMinusNumber}
          handlePlusNumber={handlePlusNumber}
          numberOfTeamMembers={numberOfTeamMembers}
        />
        <OptionalToggle isActive={isInfinity} onClick={() => handleInfiniteNumber()}>
          제한없음
        </OptionalToggle>
      </div>
    </>
  );
}
