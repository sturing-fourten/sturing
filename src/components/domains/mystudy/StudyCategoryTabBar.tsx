"use client";

import { useSelectedLayoutSegment } from "next/navigation";
import TabMenu from "./TabMenu";

const STUDY_TAB_MENUS = {
  progress: { type: "진행", segment: "" },
  recruit: { type: "수락", segment: "recruit" },
  applied: { type: "대기", segment: "applied" },
  done: { type: "완료", segment: "done" },
};

export default function StudyCategoryTabBar() {
  const currentTab = useSelectedLayoutSegment("tabs") ?? "";

  return (
    <nav className="flex justify-between items-center gap-3 bg-white">
      <TabMenu count={1} currentTab={currentTab} {...STUDY_TAB_MENUS.progress} />
      <TabMenu count={1} currentTab={currentTab} {...STUDY_TAB_MENUS.recruit} />
      <TabMenu count={1} currentTab={currentTab} {...STUDY_TAB_MENUS.applied} />
      <TabMenu count={1} currentTab={currentTab} {...STUDY_TAB_MENUS.done} />
    </nav>
  );
}
