import { ICONS } from "@/constant/icons";
import DefaultToggle from "../../../commons/toggle/DefaultToggle";

interface IRoleToggleProps {
  isActive: boolean;
  onClick?: () => void;
  role: string;
  roleDescription: string;
}

export default function RoleToggle(props: IRoleToggleProps) {
  const { isActive, onClick, role, roleDescription } = props;
  return (
    <DefaultToggle isActive={isActive} toggleSize="w-full h-12" onClick={onClick}>
      <div className="flex justify-start w-full">
        <div className="flex gap-[7px] justify-start items-center">
          <div className={`${isActive ? "text-blue-500" : "text-neutral-400"} text-sm font-medium leading-snug`}>
            {role}
          </div>
          <div className={`${isActive ? "text-stone-500" : "text-neutral-400"} text-xs font-medium leading-none`}>
            {roleDescription}
          </div>
        </div>
      </div>
      {isActive && <img src={ICONS.checkBlue.src} alt={ICONS.checkBlue.alt} />}
    </DefaultToggle>
  );
}
