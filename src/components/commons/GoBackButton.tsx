"use client";

import { useRouter } from "next/navigation";
import { ICONS } from "@/constant/icons";

const { back, backWhite } = ICONS;

export default function GoBackButton({ isWhite }: { isWhite?: boolean }) {
  const router = useRouter();
  const prevPage = () => {
    router.back();
  };
  const backIcon = isWhite ? backWhite : back;
  return (
    <>
      <button onClick={prevPage}>
        <img src={backIcon.src} alt={backIcon.alt} />
      </button>
    </>
  );
}
