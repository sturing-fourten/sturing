import { getSession } from "@/lib/database/getSession";
import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "스터디 모집하기",
  description: "Generated by create next app",
};

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getSession();
  const isLoggedIn = !!session;
  if (!isLoggedIn) redirect("/login");
  if (isLoggedIn) return <>{children}</>;
}
