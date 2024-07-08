import { useState } from "react";
import RoleList from "../../recruit/teamMemberInfo/RoleList";

export default function RoleFilter() {
  const [selectedRole, setSelectedRole] = useState<string[]>([]);

  const handleRoleToggle = (roleName: string) => {
    if (selectedRole.includes(roleName)) {
      setSelectedRole(selectedRole.filter((role) => role !== roleName));
    } else {
      setSelectedRole([...selectedRole, roleName]);
    }
  };
  return (
    <>
      <RoleList selectedRole={selectedRole} handleRoleToggle={handleRoleToggle} />
    </>
  );
}
