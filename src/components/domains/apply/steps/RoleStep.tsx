"use client";

import Title from "@/components/domains/apply/Title";
import { ICONS } from "@/constant/icons";
import RoleToggle from "../../recruit/teamMemberInfo/RoleToggle";
import { ROLE_LIST, TRole } from "@/constant/teamMemberInfo";
import { useApplyStore } from "@/store/applyStore";

interface RoleStepProps {
  onRoleChange: (wantedRole: string) => void;
}

export default function RoleStep({ onRoleChange }: RoleStepProps) {
  const role = useApplyStore((state) => state.role);
  const setRole = useApplyStore((state) => state.setRole);

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
          {Object.keys(ROLE_LIST).map((key) => (
            <RoleToggle
              key={key}
              isActive={role.includes(key)}
              onClick={() => handleRoleToggle(key)}
              role={ROLE_LIST[key as TRole].name}
              roleDescription={ROLE_LIST[key as TRole].role}
            />
          ))}
        </div>
        <div className="w-full">
          <button type="button" className="flex justify-center items-center gap-[6px]">
            <img src={ICONS.question.src} alt={ICONS.question.alt} width={13} height={13} />
            <span className="text-gray-500 text-center text-[12px] font-normal tracking-[-0.36px] leading-[18px]">
              역할에 대한 정보가 궁금하다면?
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
