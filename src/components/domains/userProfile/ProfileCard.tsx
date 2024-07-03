import Avatar from "@/components/commons/Avatar";
import Link from "next/link";
import { ICONS } from "@/constant/icons";
import InfoTag from "./InfoTag";

interface ProfileCardProps {
  page: "mypage" | "profile";
}

export default function ProfileCard({ page }: ProfileCardProps) {
  const isProfile = page === "profile";

  return (
    <div className="bg-white px-5 py-6 mb-7 border border-gray-300 rounded-[5px] flex items-center gap-3 overflow-hidden">
      <Avatar width={70} height={70} profileImageUrl="" />
      <div className="flex flex-col gap-2 justify-start w-full">
        <div className="flex items-center gap-2">
          {isProfile ? (
            <>
              <h1 className="font-bold text-[18px] leading-[150%]">웅진님</h1>
              <div className="flex gap-1 text-xs text-gray-700">
                <span>20대</span>
                <span>·</span>
                <span>여자</span>
              </div>
              <form action={""} className="flex items-center">
                <button className="text-xs text-main-500 font-semibold">팔로우</button>
              </form>
            </>
          ) : (
            <Link href={""}>
              <div className="flex items-center">
                <h1 className="font-bold text-[18px] leading-[150%]">웅진님</h1>
                <img src={ICONS.rightArrowBlackBold.src} alt={ICONS.rightArrowBlackBold.alt} />
              </div>
            </Link>
          )}
        </div>
        <div className="text-black text-xs leading-[18px] flex items-center gap-2">
          <p className="font-semibold">비기너</p>
          <p className="text-gray-700">
            팔로잉 <span className="font-semibold text-black ml-1">5</span>
          </p>
          <p className="text-gray-700">
            팔로워 <span className="font-semibold text-black ml-1">7</span>
          </p>
        </div>
        <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide min-w-full">
          <InfoTag icon={ICONS.locationBlack}>서울시 중구</InfoTag>
          <InfoTag>디자인</InfoTag>
          <InfoTag>열정적인 분위기</InfoTag>
        </div>
      </div>
    </div>
  );
}
