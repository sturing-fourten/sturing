import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "profile",
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