"use client";

import { useState } from "react";
import TabMenuLinkUnderlined from "./TabMenuLinkUnderlined";

interface TabInfo {
  title: string;
  href: string;
}

interface IDetailTabMenuLinkUnderlinedProps {
  type: "lecture" | "study";
}

export default function DetailTabMenu({ type }: IDetailTabMenuLinkUnderlinedProps) {
  const lectureTabs: TabInfo[] = [
    { title: "강의소개", href: "#lectureInfo" },
    { title: "스터디", href: "#related_study" },
    { title: "평점", href: "#rating" },
  ];

  const studyTabs: TabInfo[] = [
    { title: "정보", href: "#recruit_Info" },
    { title: "팀원", href: "#recruited_member" },
    { title: "댓글", href: "#comments" },
  ];

  const tabs = type === "lecture" ? lectureTabs : studyTabs;
  const [currentTab, setCurrentTab] = useState<string>(tabs[0].href);

  const handleClick = (tabId: string) => {
    setCurrentTab(tabId);
  };

  return (
    <nav className="flex justify-between items-center gap-3 bg-white sticky top-0 left-0 z-sticky">
      {tabs.map((tab) => (
        <TabMenuLinkUnderlined
          key={tab.href}
          title={tab.title}
          isCurrent={currentTab === tab.href}
          href={tab.href}
          onClick={() => handleClick(tab.href)}
          isReplace={true}
        />
      ))}
    </nav>
  );
}
