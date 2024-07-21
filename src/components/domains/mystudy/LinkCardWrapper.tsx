"use client";

import Link from "next/link";
import { MouseEvent } from "react";

export default function LinkCardWrapper({
  children,
  href,
  className,
}: {
  children: React.ReactNode;
  href: string;
  className?: string;
}) {
  const onClick = (e: MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;

    if (target.dataset.role === "insideLink") {
      return;
    }
  };

  return (
    <Link className={className ?? ""} onClick={() => onClick} href={href}>
      {children}
    </Link>
  );
}
