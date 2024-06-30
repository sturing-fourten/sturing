import { ReactNode } from "react";
import Link from "next/link";
import { ICONS } from "@/constant/icons";
import Image from "next/image";

export default function Title({ children, addStyle, href }: { children: ReactNode; addStyle?: string; href?: string }) {
  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className={`text-gray-1000 font-semibold text-base tracking-[-0.32px] ${addStyle}`}>{children}</h1>
        {href && (
          <Link href={href}>
            <Image src={ICONS.rightArrowGray.src} alt={ICONS.rightArrowGray.alt} width={24} height={24} />
          </Link>
        )}
      </div>
    </>
  );
}
