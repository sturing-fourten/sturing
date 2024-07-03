import RoleToggle from "@/components/domains/recruit/teamMemberInfo/RoleToggle";
import { ROLE_LIST } from "@/constant/teamMemberInfo";

interface RoleListProps {
  selectedRole: string[];
  handleRoleToggle: (Role: string) => void;
}

export default function RoleList({ selectedRole, handleRoleToggle }: RoleListProps) {
  return (
    <div className="grid grid-cols-2 gap-2">
      {Object.keys(ROLE_LIST).map((key) => (
        <RoleToggle
          key={key}
          isActive={selectedRole.includes(ROLE_LIST[key].name)}
          onClick={() => handleRoleToggle(ROLE_LIST[key].name)}
          role={ROLE_LIST[key].name}
          roleDescription={ROLE_LIST[key].role}
        />
      ))}
    </div>
  );
}
