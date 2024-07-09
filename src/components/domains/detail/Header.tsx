import { LectureData } from "@/app/lecture/[id]/page";
import LectureLinkBanner from "@/components/commons/LectureLinkBanner";
import TopBar from "@/components/commons/TopBar";
import { TagLight } from "@/components/commons/tag/TagLight";
import { TagMain } from "@/components/commons/tag/TagMain";
import { TagRate } from "@/components/commons/tag/TagRate";
import { IMAGES_DEFAUlT } from "@/constant/images";
import { CATEGORY } from "@/constant/category";

interface BannerProps {
  page: "study" | "lecture";
  lectureData: LectureData;
}

const { study, lecture } = IMAGES_DEFAUlT;

export default function Header({ page, lectureData }: BannerProps) {
  const { online, platform, category, rating, title, link } = lectureData;
  const imageUrl = "";
  const isStudy = page === "study";
  const defaultImageUrl = isStudy ? study.src : lecture.src;
  const style = {
    backgroundImage: `url(${imageUrl || defaultImageUrl})`,
  };
  const isLeader = true;

  return (
    <>
      <section
        className={`flex flex-col  w-full items-center pb-10 bg-cover z-[2] bg-no-repeat relative ${
          isStudy && "before:-z-[2] before:bg-black/20 before:inset-0 before:absolute"
        }  `}
        style={style}>
        <TopBar variant="share" showMore={isStudy && isLeader} isWhite={isStudy} />
        <div className="flex items-center gap-1 mt-10 mb-4">
          <TagMain>{online ? "온라인" : "오프라인"}</TagMain>
          <TagLight>{CATEGORY(category)}</TagLight>
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
          {title}
        </h1>
        {isStudy && (
          <div className="mt-6 w-[149px] h-[18px] flex justify-start items-center gap-2.5 leading-[150%] tracking-[-0.36px] text-gray-400 text-[12px] font-medium text-nowrap ">
            <p>4주 진행</p>
            <div className="w-[1px] h-[12px] bg-gray-400" />
            <p>06.21(일)부터 시작</p>
          </div>
        )}
      </section>
      <section className="px-4 py-5">
        <LectureLinkBanner href={link} title={title} />
      </section>
    </>
  );
}
