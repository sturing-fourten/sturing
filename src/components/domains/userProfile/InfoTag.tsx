import TagBase from "@/components/commons/TagBase";
import { ReactNode } from "react";

type TIcon = {
  src: string;
  alt: string;
  name?: string;
};

interface TagProps {
  children: ReactNode;
  icon?: TIcon;
}

export default function InfoTag({ children, icon }: TagProps) {
  return (
    <>
      <TagBase className="bg-main-100 text-gray-1000 font-medium shrink-0 h-[26px]">
        {icon && <img src={icon.src} alt={icon.alt} />}
        {children}
      </TagBase>
    </>
  );
}
