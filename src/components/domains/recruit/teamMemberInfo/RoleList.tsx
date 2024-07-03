import RoleToggle from "@/components/domains/recruit/teamMemberInfo/RoleToggle";
import { ROLE_LIST, TRole } from "@/constant/teamMemberInfo";

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
          isActive={selectedRole.includes(ROLE_LIST[key as TRole].name)}
          onClick={() => handleRoleToggle(ROLE_LIST[key as TRole].name)}
          role={ROLE_LIST[key as TRole].name}
          roleDescription={ROLE_LIST[key as TRole].role}
        />
      ))}
    </div>
  );
}
