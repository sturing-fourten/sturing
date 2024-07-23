import Title from "@/components/domains/apply/Title";
import RoleToggle from "../../recruit/teamMemberInfo/RoleToggle";
import { ROLE_LIST, TRole } from "@/constant/teamMemberInfo";
import { useApplyStore } from "@/store/applyStore";
import { useEffect, useState } from "react";

const fetchwantedRoleList = async (studyId: string) => {
  try {
    const response = await fetch(`/api/study/${studyId}`);
    const data = await response.json();
    return data.study.wantedMember.role;
  } catch (error) {
    console.error("Error fetching study", error);
    throw error;
  }
};

interface RoleStepProps {
  onRoleChange: (wantedRole: string) => void;
  studyId: string;
}

export default function RoleStep({ onRoleChange, studyId }: RoleStepProps) {
  const [wantedRoleList, setWantedRoleList] = useState<string[]>([]);
  const role = useApplyStore((state) => state.role);
  const setRole = useApplyStore((state) => state.setRole);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const roles = await fetchwantedRoleList(studyId);
        setWantedRoleList(roles);
      } catch (error) {
        console.error("Error fetching wanted role list", error);
      }
    };

    fetchData();
  }, [studyId]);

  const handleRoleToggle = (roleName: string) => {
    const newRole = role === roleName ? "" : roleName;
    setRole(newRole);
    onRoleChange(newRole);
  };

  return (
    <div className="flex-col justify-between w-full px-4 mt-5">
      <Title>가장 희망하는 역할을 선택해 주세요</Title>
      <div className="flex flex-col gap-5 h-full mt-[14px]">
        <span className="text-gray-700 text-[14px] font-semibold tracking-[-0.42px] leading-[22px]">
          개설자가 원하는 역할 목록이에요
        </span>
        <div className="grid grid-cols-2 flex-col gap-[15px]">
          {wantedRoleList.map((key) => (
            <RoleToggle
              key={key}
              isActive={role.includes(key)}
              onClick={() => handleRoleToggle(key)}
              role={ROLE_LIST[key as TRole].name}
              roleDescription={ROLE_LIST[key as TRole].role}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
