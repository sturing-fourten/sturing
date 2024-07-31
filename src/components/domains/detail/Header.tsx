"use client";

import LectureLinkBanner from "@/components/commons/LectureLinkBanner";
import TopBar from "@/components/commons/TopBar";
import { TagLight } from "@/components/commons/tag/TagLight";
import { TagMain } from "@/components/commons/tag/TagMain";
import { TagRate } from "@/components/commons/tag/TagRate";
import { IMAGES_DEFAUlT } from "@/constant/images";
import { CATEGORY } from "@/constant/category";
import { TLectureInfoData } from "@/types/api/lecture";
import { TStudyDetailInfoData } from "@/types/api/study";
import { getDateRangeWithWeeks } from "@/utils/getDateRangeWithWeeks";
import { deleteStudyAction } from "@/lib/database/action/study";
import { useRouter } from "next/navigation";
import { TShareInfo } from "@/components/modal/ShareModal";
interface BannerProps {
  page: "study" | "lecture";
  lectureInfo: TLectureInfoData;
  studyInfo?: TStudyDetailInfoData["study"];
  shareInfo?: TShareInfo;
}

const { study, lecture } = IMAGES_DEFAUlT;

export default function Header({ page, lectureInfo, studyInfo }: BannerProps) {
  const { online: lectureOnline, platform, category: lectureCategory, rating, title: lectureTitle, link } = lectureInfo;
  const studyOnline = studyInfo?.meeting?.format || "ONLINE";
  const { category: studyCategory = "", title: studyTitle, startDate, endDate, isMine, _id: studyId } = studyInfo || {};
  const studyImageUrl = studyInfo?.imageUrl;
  const isStudy = page === "study";
  const defaultImageUrl = isStudy ? study.src : lecture.src;
  const imageUrl = isStudy ? studyImageUrl : "";
  const studyStartDate = startDate
    ? new Date(startDate).toLocaleDateString("ko-KR", {
        month: "2-digit",
        day: "2-digit",
        weekday: "short",
      })
    : "";
  const style = {
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundImage: `url(${imageUrl || defaultImageUrl})`,
  };
  const router = useRouter();

  const getStatus = () => {
    if (isStudy) {
      switch (studyOnline) {
        case "ONLINE":
          return "온라인";
        case "OFFLINE":
          return "오프라인";
        default:
          return "온/오프라인";
      }
    } else {
      return lectureOnline ? "온라인" : "오프라인";
    }
  };

  const handleDeleteBoard = async () => {
    if (!studyId) return;
    const result = await deleteStudyAction(studyId);

    if (result.status == 200) {
      alert(result.message);
      router.push("/mystudy/waiting");
    } else {
      alert(result.message);
    }
  };

  const shareInfo: {} = studyInfo
    ? {
        title: studyInfo?.title,
        thumbnail: studyInfo?.imageUrl,
      }
    : {
        title: lectureInfo?.title,
        type: "강의",
      };

  return (
    <>
      <section
        className={`flex flex-col  w-full items-center pb-10 bg-cover z-[2] bg-no-repeat relative ${
          isStudy && "before:-z-[2] before:bg-black/20 before:inset-0 before:absolute"
        }  `}
        style={style}>
        <TopBar
          variant="share"
          showMore={isStudy}
          isWhite={isStudy}
          isMine={isMine}
          onClick={handleDeleteBoard}
          shareInfo={shareInfo}
        />
        <div className="flex items-center gap-1 mt-10 mb-4">
          <TagMain>{getStatus()}</TagMain>
          <TagLight>{CATEGORY(isStudy ? studyCategory : lectureCategory)}</TagLight>
          {!isStudy && (
            <>
              <TagLight>{platform}</TagLight>
              <TagRate>{rating}</TagRate>
            </>
          )}
        </div>
        <h1
          className="mx-11 text-center text-[18px] font-semibold leading-[150%] tracking-[0.6px] break-keep"
          style={{ color: isStudy ? "white" : "black" }}>
          {isStudy ? studyTitle : lectureTitle}
        </h1>
        {isStudy && (
          <div className="mt-6 w-[149px] h-[18px] flex justify-start items-center gap-2.5 leading-[150%] tracking-[-0.36px] text-gray-300 text-[12px] font-medium text-nowrap ">
            <p>{getDateRangeWithWeeks(startDate || "", endDate || "")}</p>
            <div className="w-[1px] h-[12px] bg-gray-400" />
            <p>{`${studyStartDate} 부터 시작`}</p>
          </div>
        )}
      </section>
      <section className="px-4 py-5">
        <LectureLinkBanner href={link} title={lectureTitle} />
      </section>
    </>
  );
}
