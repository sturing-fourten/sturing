"use client";

import { urlRenderAction } from "@/lib/database/action/myStudyList";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/mystudy/progress" || pathname === "/mystudy") {
      urlRenderAction("PROGRESS");
    }
    if (pathname === "/mystudy/waiting") {
      urlRenderAction("RECRUIT_START_OWNER");
    }
    if (pathname === "/mystudy/done") {
      urlRenderAction("DONE");
    }
  }, [pathname]);

  return <>{children}</>;
}
