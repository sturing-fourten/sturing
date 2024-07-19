"use client";

import { tabMyStudyAction } from "@/lib/database/action/myStudyList";
import { TMyStudyTabMenuLinkUnderlinedItem } from "@/types/study";
import { useSelectedLayoutSegment } from "next/navigation";

export function MyStudyTabMenuLinkUnderlined(props: TMyStudyTabMenuLinkUnderlinedItem) {
  const { href, title, count } = props;
  const currentTab = useSelectedLayoutSegment("tabs") ?? "";
  const currentPath = `/mystudy/${currentTab}`;
  const isCurrent = currentPath === href;

  return (
    <form
      className={`w-full py-3 border-b-2 text-sm font-medium leading-snug tracking-[-0.42px] ${
        isCurrent ? "border-b-3 text-main-500 border-main-500" : "border-gray-300"
      }`}
      action={tabMyStudyAction}>
      <input type="hidden" name="href" value={href} />
      <button className="w-full flex justify-center items-center gap-1 ">
        <span>{title}</span>
        <span>{count}</span>
      </button>
    </form>
  );
}
