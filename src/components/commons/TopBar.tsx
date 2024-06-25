import Image from "next/image";
import Link from "next/link";

interface TopBarProps {
  type: "share" | "chat" | "back" | "save";
  children?: React.ReactNode;
}

export default function TopBar({ type, children, ...props }: TopBarProps) {
  return (
    <div className="bg-white w-[375px] h-[54px] flex justify-between items-center px-4">
      {(type === "share" || type === "chat" || type === "back") && (
        <Link href="">
          <Image src="icons/back.svg" alt="뒤로가기 아이콘" width={24} height={24} />
        </Link>
      )}
      {type === "share" && (
        <div className="flex justify-center items-center gap-3">
          <button>
            <Image src="icons/share.svg" alt="menu 아이콘" width={24} height={24} />
          </button>
          <button>
            <Image src="icons/more.svg" alt="더보기 아이콘" width={24} height={24} />
          </button>
        </div>
      )}
      {type === "chat" && (
        <>
          <span className="text-[18px] font-semibold tracking-[-0.36px] leading-[27px]">{children}</span>
          <div className="flex justify-center items-center gap-3">
            <button>
              <Image src="icons/message.svg" alt="챗팅 아이콘" width={24} height={24} />
            </button>
            <button>
              <Image src="icons/bookmark.svg" alt="북마크 아이콘" width={24} height={24} />
            </button>
          </div>
        </>
      )}
      {type === "back" && (
        <>
          <span className="text-[18px] font-semibold tracking-[-0.36px] leading-[27px]">{children}</span>
          <span></span>
        </>
      )}
      {type === "save" && (
        <>
          <button className="text-gray-600 text-[14px] tracking-[-0.42px] leading-[22px]">취소</button>
          <button className="text-gray-600 text-[14px] tracking-[-0.42px] leading-[22px]">임시저장</button>
        </>
      )}
    </div>
  );
}
