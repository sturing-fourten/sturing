"use client";

import Avatar from "@/components/commons/Avatar";
import Link from "next/link";
import { ICONS } from "@/constant/icons";
import InfoTag from "./InfoTag";
import { useUserStore } from "@/store/userStore";
import { useEffect } from "react";
import { useMatchingStore } from "@/store/matchingStore";
import { getIntrestsTitleById, getLevelTitleById, getMoodAltById } from "@/utils/getTitleById";
import { EditProfileType } from "@/types/editProfile";
import { MatchingType } from "@/types/matching";

interface ProfileCardProps {
  page: "mypage" | "profile";
  profile?: { user: EditProfileType; matching: MatchingType };
}

export default function ProfileCard({ page, profile }: ProfileCardProps) {
  const isProfile = page === "profile";
  const { user, fetchUser } = useUserStore();
  const { matching, fetchMatching } = useMatchingStore();

  const repLevel = JSON.parse(matching?.levels || "[]")[0];
  const interest = repLevel?.interest;
  const level = repLevel?.level;

  const repLocation = JSON.parse(matching?.locations || "[]")[0];
  const city = repLocation?.city;
  const district = repLocation?.district;

  const repMood = JSON.parse(matching?.moods || "[]")[0];

  const visibleInfo = (data: EditProfileType) =>
    (data?.ageIsVisible || data?.genderIsVisible) && (
      <div className="flex gap-1 text-xs text-gray-700 font-semibold">
        {data.ageIsVisible && <span>{data.age}</span>}
        {data.ageIsVisible && data.genderIsVisible && <span>·</span>}
        {data.genderIsVisible && <span>{data.gender}</span>}
      </div>
    );

  const matchingInfo = () => (
    <>
      <span>{getIntrestsTitleById(interest)}</span>
      <span>·</span>
      <span>{getLevelTitleById(level)}</span>
    </>
  );

  useEffect(() => {
    if (!isProfile) {
      fetchUser();
      fetchMatching();
    }
  }, []);

  return (
    <div className="bg-white px-5 py-6  border border-gray-300 rounded-[5px] flex items-center gap-3 overflow-hidden">
      <Avatar
        width={70}
        height={70}
        profileImageUrl={(isProfile ? profile?.user?.profileImageUrl : user?.profileImageUrl) || ""}
        hasBorder={true}
      />
      <div className="flex flex-col gap-2 justify-start w-full">
        <div className="flex items-center gap-2">
          <h1 className="font-bold text-[18px] leading-[150%]">
            {isProfile ? profile?.user?.nickname : user?.nickname}님
          </h1>
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
          {isProfile ? visibleInfo(profile?.user || null) : visibleInfo(user || null)}
          <div className="flex gap-1 text-xs text-gray-1000 font-semibold">
            {(isProfile ? profile?.matching?.levels : matching?.levels) && matchingInfo()}
          </div>
        </div>
        <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide min-w-full">
          {matching?.locationIsVisible && <InfoTag icon={ICONS.locationBlack}>{`${city} ${district}`}</InfoTag>}
          {repMood && <InfoTag>{getMoodAltById(repMood)}</InfoTag>}
        </div>
      </div>
    </div>
  );
}
