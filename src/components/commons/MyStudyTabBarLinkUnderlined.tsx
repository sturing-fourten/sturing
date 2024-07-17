"use client";

import { useSelectedLayoutSegment } from "next/navigation";

import { TMyStudyTabMenuLinkUnderlinedItem } from "@/types/study";
import MyStudyTabMenuLinkUnderlined from "./MyStudyTabMenuLinkUnderlined";

const getIsCurrent = (currentPath: string, href: string) => currentPath === href;

interface IMyStudyTabBarUnderlined {
  defaultSegment: string;
  tabMenuList: TMyStudyTabMenuLinkUnderlinedItem[];
  stickyOption?: string;
}

export default function MyStudyTabBarLinkUnderlined(props: IMyStudyTabBarUnderlined) {
  const { defaultSegment, tabMenuList, stickyOption } = props;
  const currentTab = useSelectedLayoutSegment("tabs") ?? "";
  const currentPath = `${defaultSegment}${currentTab}`;

  return (
    <nav className={`flex justify-between items-center bg-white ${stickyOption && stickyOption}`}>
      {tabMenuList.map((item) => (
        <MyStudyTabMenuLinkUnderlined key={item.id} isCurrent={getIsCurrent(currentPath, item.href)} {...item} />
      ))}
    </nav>
  );
}
