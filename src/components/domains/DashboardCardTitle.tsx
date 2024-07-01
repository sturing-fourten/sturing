import Image from "next/image";
import { deleteBlue } from "../../../public/icons/icons";

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
        <span className="text-black text-base font-semibold leading-normal">{title}</span>
        {children}
        {isEditing && (
          <button className="ml-auto">
            <Image src={deleteBlue} alt="" width={24} height={24} />
          </button>
        )}
      </div>
      <hr className="mt-3 bg-gray-300" />
    </>
  );
}
