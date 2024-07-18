import Button from "@/components/commons/Button";
import { ReactNode } from "react";

export default function layout({ children }: { children: ReactNode }) {
  const isLeader = false;
  const isDone = false;
  return (
    <>
      {children}
      {isLeader && isDone && (
        <footer className="fixed bottom-0 z-[2] w-[inherit] py-3 px-4 bg-white">
          <Button
            varient="filled"
            className="w-full h-12 bg-blue-500 rounded text-white text-base font-semibold leading-normal">
            스터디 종료하기
          </Button>
        </footer>
      )}
    </>
  );
}
