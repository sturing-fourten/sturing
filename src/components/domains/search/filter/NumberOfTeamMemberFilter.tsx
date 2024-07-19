import NumberOfTeamMember from "../../recruit/teamMemberInfo/NumberOfTeamMember";

import { useFilterStore } from "@/store/FilterStore";

export default function NumberOfTeamMemberFilter() {
  const { setMemberCountFilter, memberCount } = useFilterStore();

  const handleMinusNumber = () => {
    if (memberCount > 1) {
      setMemberCountFilter(memberCount - 1);
    }
  };

  const handlePlusNumber = () => {
    setMemberCountFilter(memberCount + 1);
  };

  return (
    <>
      <div className="flex-col inline-flex gap-[13px] w-full">
        <div className="text-gray-800 text-sm sm:text-base font-medium leading-snug">
          {"함께하고 싶은 팀원 수 (본인 포함)"}
        </div>
        <NumberOfTeamMember
          handleMinusNumber={handleMinusNumber}
          handlePlusNumber={handlePlusNumber}
          numberOfTeamMembers={memberCount}
        />
      </div>
    </>
  );
}
