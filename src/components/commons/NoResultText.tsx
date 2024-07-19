import { ReactNode } from "react";

export default function NoResultText({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="flex items-center justify-center w-full h-[120px] ">
        <p className="text-gray-800 text-base">{children}</p>
      </div>
    </>
  );
}
