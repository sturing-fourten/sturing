import Image from "next/image";
import Link from "next/link";

interface TitleProps {
  children: React.ReactNode;
}

export default function Title({ children }: TitleProps) {
  return (
    <>
      <div className="flex justify-between full">
        <span className="text-gray-1000 text-[18px] text-center font-semibold tracking-[-0.54px] leading-[24px]">
          {children}
        </span>
        <Link href="">
          <button>
            <Image src="icons/rightarrow-black.svg" alt="> 아이콘" width={24} height={24} />
          </button>
        </Link>
      </div>
    </>
  );
}
