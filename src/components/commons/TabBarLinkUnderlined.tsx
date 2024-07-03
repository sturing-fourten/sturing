"use client";

import { useSelectedLayoutSegment } from "next/navigation";
import TabMenuLinkUnderlined from "./TabMenuLinkUnderlined";
import { TTabMenuLinkUnderlinedItem } from "@/types/study";

const getIsCurrent = (currentPath: string, href: string) => currentPath === href;

interface ITabBarUnderlined {
  defaultSegment: string;
  tabMenuList: TTabMenuLinkUnderlinedItem[];
  stickyOption?: string;
}

export default function TabBarLinkUnderlined(props: ITabBarUnderlined) {
  const { defaultSegment, tabMenuList, stickyOption } = props;
  const currentTab = useSelectedLayoutSegment("tabs") ?? "";

  return (
    <nav className={`flex justify-between items-center bg-white ${stickyOption && stickyOption}`}>
      {tabMenuList.map((item) => (
        <TabMenuLinkUnderlined
          key={item.id}
          isCurrent={getIsCurrent(`${defaultSegment}${currentTab}`, item.href)}
          {...item}
        />
      ))}
    </nav>
  );
}
