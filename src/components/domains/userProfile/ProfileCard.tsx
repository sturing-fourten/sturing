import Avatar from "@/components/commons/Avatar";
import Link from "next/link";
import { ICONS } from "@/constant/icons";
import InfoTag from "./InfoTag";
import { getInterestsTitleById, getLevelTitleById, getMoodAltById } from "@/utils/getTitleById";
import { EditProfileType } from "@/types/editProfile";
import { MatchingType } from "@/types/matching";

interface ProfileCardProps {
  page: "mypage" | "profile";
  mypage?: { user: EditProfileType; matching: MatchingType };
  profile?: { user: EditProfileType; matching: MatchingType };
}

export default function ProfileCard({ page, mypage, profile }: ProfileCardProps) {
  const isProfile = page === "profile";

  const userLevel = JSON.parse(profile?.matching?.levels || "[]");
  const userLocation = JSON.parse(profile?.matching?.locations || "[]");
  const userMood = JSON.parse(profile?.matching?.moods || "[]")[0];

  const myLevel = JSON.parse(mypage?.matching?.levels || "[]");
  const myLocation = JSON.parse(mypage?.matching?.locations || "[]");
  const myMood = JSON.parse(mypage?.matching?.moods || "[]")[0];

  const visibleInfo = (data: EditProfileType) =>
    (data?.ageIsVisible || data?.genderIsVisible) && (
      <div className="flex gap-1 text-xs text-gray-700 font-semibold">
        {data.ageIsVisible && <span>{data.age}</span>}
        {data.ageIsVisible && data.genderIsVisible && <span>·</span>}
        {data.genderIsVisible && <span>{data.gender}</span>}
      </div>
    );

  const matchingLevelInfo = (data: { interest: string; level: string }[]) => (
    <>
      <span>{getInterestsTitleById(data[0]?.interest)}</span>
      <span>·</span>
      <span>{getLevelTitleById(data[0]?.level)}</span>
    </>
  );

  const matchingLocationInfo = (locationIsVisible: boolean, data: { city: string; district: string }[]) =>
    locationIsVisible && <InfoTag icon={ICONS.locationBlack}>{`${data[0].city} ${data[0].district}`}</InfoTag>;

  return (
    <div className="bg-white px-5 py-6  border border-gray-300 rounded-[5px] flex items-center gap-3 overflow-hidden">
      <Avatar
        width={70}
        height={70}
        profileImageUrl={(isProfile ? profile?.user?.profileImageUrl : mypage?.user?.profileImageUrl) || ""}
        hasBorder={true}
      />
      <div className="flex flex-col gap-2 justify-start w-full">
        <div className="flex items-center gap-2">
          <h1 className="font-bold text-[18px] leading-[150%]">
            {isProfile ? profile?.user?.nickname : mypage?.user?.nickname}님
          </h1>
          {isProfile ? (
            <form action={""} className="flex items-center">
              <button className="text-xs text-main-500 font-semibold">팔로우</button>
            </form>
          ) : (
            <Link href={"/edit-profile"}>
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
          {isProfile ? visibleInfo(profile?.user || null) : visibleInfo(mypage?.user || null)}
          <div className="flex gap-1 text-xs text-gray-1000 font-semibold">
            {matchingLevelInfo(isProfile ? userLevel : myLevel)}
          </div>
        </div>
        <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide min-w-full">
          {isProfile
            ? matchingLocationInfo(profile?.matching?.locationIsVisible || false, userLocation)
            : matchingLocationInfo(mypage?.matching?.locationIsVisible || false, myLocation)}
          <InfoTag>{getMoodAltById(isProfile ? userMood : myMood)}</InfoTag>
        </div>
      </div>
    </div>
  );
}
