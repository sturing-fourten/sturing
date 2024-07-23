import Image from "next/image";
import { bookmarkWhiteOn, bookmarkWhiteOff, date, location } from "@/../public/icons/icons";
import { TagMain } from "../tag/TagMain";
import { TagLight } from "../tag/TagLight";
import { TStudyRecruitCardData } from "@/types/api/study";
import { IMAGES_DEFAUlT } from "@/constant/images";
import { formatDate } from "@/utils/formatDate";
import { PROGRESSWAY_LIST } from "@/constant/progressWay";
import { CATEGORY_MAP_TO_KO } from "@/utils/categoryMap";

interface IStudyRecruitCardProps {
  isMini?: boolean;
  hideBookmark?: boolean;
  recruitCardData: TStudyRecruitCardData;
  onClick?: () => void;
}

export function StudyRecruitCard({ isMini, recruitCardData, onClick, hideBookmark = false }: IStudyRecruitCardProps) {
  const {
    category,
    title,
    imageUrl,
    startDate,
    endDate,
    meeting,
    wantedMemberCount,
    acceptedTeamMemberCount,
    isBookmarked,
  } = recruitCardData;
  const formattedStartDate = formatDate(startDate);
  const formattedEndDate = formatDate(endDate);
  const studySchedule =
    meeting.schedule?.time === "추후협의"
      ? "모집 날짜 미정"
      : `매주 ${meeting.schedule.day.slice(0, 1)} ${meeting.schedule.time}`;

  return (
    <article
      onClick={onClick}
      className={`flex flex-col gap-3 shrink-0 cursor-pointer ${isMini ? "w-full" : "w-[185px]"}`}>
      <section
        className={`relative rounded-lg bg-cover bg-center bg-no-repeat overflow-hidden border border-gray-300  ${
          isMini ? "h-[92px] sm:h-[150px]" : "h-[100px]"
        }`}
        style={{
          backgroundImage: `url(${imageUrl || IMAGES_DEFAUlT.study.src})`,
        }}>
        {!hideBookmark && (
          <Image
            className="absolute right-[8px] top-[8px] cursor-pointer"
            src={isBookmarked ? bookmarkWhiteOn : bookmarkWhiteOff}
            alt="bookmark icon"
            width={26}
            height={26}
          />
        )}
        <p className="absolute bottom-0 w-full py-[3px] bg-black/[.8] text-[12px] text-semibold text-center tracking-[-0.36px] text-white">
          {studySchedule}
        </p>
      </section>
      <section>
        <div className="flex gap-1 mb-1">
          <TagMain>{PROGRESSWAY_LIST[meeting.format]}</TagMain>
          <TagLight>{CATEGORY_MAP_TO_KO[category]}</TagLight>
        </div>
        <p className="mb-3 text-4 font-semibold tracking-[-0.32px] text-black leading-normal line-clamp-1 ">{title}</p>
        <div className="flex items-center text-[12px] font-medium tracking-[-0.36px] text-gray-600">
          <Image className="mr-[2px]" src={date} alt="date icon" width={18} height={18} />
          <span>{`${formattedStartDate}-${formattedEndDate}`}</span>
          <span className="w-[1px] h-3 mx-2 bg-gray-400"></span>
          <Image className="mr-[2px]" src={location} alt="location icon" width={18} height={18} />
          <span>{meeting.location ? meeting.location : meeting.platform}</span>
        </div>
        <hr className="my-[8px] bg-gray-300" />
        <p className="text-[12px] font-medium tracking-[-0.36px] text-gray-700">
          모집
          {wantedMemberCount === "제한없음"
            ? `인원 ${wantedMemberCount}`
            : `중 ${acceptedTeamMemberCount}/${wantedMemberCount}`}
        </p>
      </section>
    </article>
  );
}
