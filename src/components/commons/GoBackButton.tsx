"use client";

import { useParams, useRouter, useSearchParams } from "next/navigation";
import { ICONS } from "@/constant/icons";
import { headers } from "next/headers";
import { useEffect, useState } from "react";

const { back, backWhite } = ICONS;

export default function GoBackButton({ isWhite, isBackToHome }: { isWhite?: boolean; isBackToHome?: boolean }) {
  const router = useRouter();

  const prevPage = () => {
    if (isBackToHome) {
      router.replace("/");
    } else {
      router.back();
    }
  };

  const backIcon = isWhite ? backWhite : back;
  return (
    <>
      <button type="button" onClick={prevPage}>
        <img src={backIcon.src} alt={backIcon.alt} />
      </button>
    </>
  );
}
