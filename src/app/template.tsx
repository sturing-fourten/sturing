"use client";

import { useUserStore } from "@/store/userStore";
import { redirect, usePathname } from "next/navigation";
import { useEffect } from "react";

const onlyLoggedInRoute = ["/mystudy", "/mypage", "/edit-profile", "/matching", "/recruit", "/apply"];
const onlyLoggedOutRoute = ["/login"];
const onlyLoggedInRoutePattern = new RegExp(`^(${onlyLoggedInRoute.join("|")})`);
const onlyLoggedOutRoutePattern = new RegExp(`^(${onlyLoggedOutRoute.join("|")})`);

export default function Template({ children }: { children: React.ReactNode }) {
  const { user, fetchUser } = useUserStore();
  const isLoggedIn = !!user;
  const pathname = usePathname();

  useEffect(() => {
    if (!user) {
      fetchUser();
    }
  }, [user]);

  const isOnlyLoggedInRoute = onlyLoggedInRoutePattern.test(pathname);
  const isOnlyLoggedOutRoute = onlyLoggedOutRoutePattern.test(pathname);

  if (!isLoggedIn && isOnlyLoggedInRoute) {
    return redirect("/login");
  } else if (isLoggedIn && isOnlyLoggedOutRoute) {
    return redirect("/");
  } else return <>{children}</>;
}
