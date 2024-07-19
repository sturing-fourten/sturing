import { useState } from "react";
import RoleList from "../../recruit/teamMemberInfo/RoleList";
import { useFilterStore } from "@/store/FilterStore";

export default function RoleFilter() {
  const { roles, setRoleFilter } = useFilterStore();

  const handleRoleToggle = (roleName: string) => {
    setRoleFilter(roleName);
  };
  return (
    <>
      <RoleList selectedRole={roles} handleRoleToggle={handleRoleToggle} />
    </>
  );
}
