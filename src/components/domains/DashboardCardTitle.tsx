import Image from "next/image";
import { deleteBlue } from "@/../public/icons/icons";

interface IDashboardCardTitleProps {
  title: string;
  children?: React.ReactNode;
  isEditing?: boolean;
}
export default function DashboardCardTitle(props: IDashboardCardTitleProps) {
  const { title, children, isEditing } = props;
  return (
    <>
      <div className="flex items-center gap-2">
        <span className="h-[25px] text-black text-base font-semibold leading-normal">{title}</span>
        {children}
        {isEditing && (
          <button className="ml-auto">
            <Image src={deleteBlue} alt="" width={24} height={24} />
          </button>
        )}
      </div>
      <hr className="w-full my-3 bg-gray-300" />
    </>
  );
}
