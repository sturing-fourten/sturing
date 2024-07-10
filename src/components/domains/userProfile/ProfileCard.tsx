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
    <div className="bg-white px-5 py-6  border border-gray-300 rounded-[5px] flex items-center gap-3 overflow-hidden">
      <Avatar width={70} height={70} profileImageUrl="" />
      <div className="flex flex-col gap-2 justify-start w-full">
        <div className="flex items-center gap-2">
          <h1 className="font-bold text-[18px] leading-[150%]">웅진님</h1>
          {isProfile ? (
            <form action={""} className="flex items-center">
              <button className="text-xs text-main-500 font-semibold">팔로우</button>
            </form>
          ) : (
            <Link href={"/mypage/edit"}>
              <button className="flex items-center text-gray-700 font-semibold text-xs leading-normal">
                프로필 수정 <img src={ICONS.rightArrowBlackBold.src} />
              </button>
            </Link>
          )}
        </div>
        <div className="text-black text-xs leading-[18px] flex items-center gap-2">
          <p className="text-gray-700">
            팔로잉 <span className="font-semibold text-black ml-1">5</span>
          </p>
          <p className="text-gray-700">
            팔로워 <span className="font-semibold text-black ml-1">7</span>
          </p>
        </div>
        <div className="flex items-center gap-[10px]">
          <div className="flex gap-1 text-xs text-gray-700 font-semibold">
            <span>20대</span>
            <span>·</span>
            <span>여자</span>
          </div>
          <div className="flex gap-1 text-xs text-gray-1000 font-semibold">
            <span>개발</span>
            <span>·</span>
            <span>비기너</span>
          </div>
        </div>
        <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide min-w-full">
          <InfoTag icon={ICONS.locationBlack}>서울시 중구</InfoTag>
          <InfoTag>열정적인 분위기</InfoTag>
        </div>
      </div>
    </div>
  );
}
