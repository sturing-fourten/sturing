import { ROLE_LIST, TRole } from "@/constant/teamMemberInfo";

interface IRoleToggleProps {
  role: TRole;
  count: string;
}

export default function RoleTag(props: IRoleToggleProps) {
  const { role, count } = props;
  return (
    <div className="flex item-center justify-between w-full bg-gray-100 p-4 rounded-[5px]">
      <div className="flex gap-[7px] justify-start items-center">
        <div className="text-black text-sm font-semibold leading-snug">{ROLE_LIST[role].name}</div>
        <div className="text-gray-600 text-xs font-medium leading-none">{ROLE_LIST[role].role}</div>
      </div>
      <p className="text-black text-sm">{count}</p>
    </div>
  );
}
