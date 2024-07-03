import HorizontalDivider from "@/components/commons/HorizontalDivider";
import TopBar from "@/components/commons/TopBar";
import type { Metadata } from "next";
import { headers } from "next/headers";

export const metadata: Metadata = {
  title: "my page",
  description: "Generated by create next app",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = headers();
  const headerPathname = headersList.get("x-pathname") || "";

  const isMyPage = headerPathname === "/mypage";

  return (
    <>
      <div className="bg-gradient-to-br from-gradient-gray/30 to-gradient-to/30 ">
        <TopBar variant="chat" showBookmark={isMyPage}>
          {isMyPage && "마이페이지"}
        </TopBar>
        <HorizontalDivider addStyle="opacity-20" />
        {children}
      </div>
    </>
  );
}
