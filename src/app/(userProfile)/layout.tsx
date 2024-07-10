import HorizontalDivider from "@/components/commons/HorizontalDivider";
import TopBar from "@/components/commons/TopBar";
import type { Metadata } from "next";
import { headers } from "next/headers";
import { TopBarVariant } from "@/components/commons/TopBar";

export const metadata: Metadata = {
  title: "my page",
  description: "Generated by create next app",
};

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <div className="flex-col inline-flex w-full max-h-dvh">
        <div className="flex-1 overflow-auto scrollbar-hide ">{children}</div>
      </div>
    </>
  );
}
