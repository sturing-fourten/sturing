import LectureLinkBanner from "@/components/commons/LectureLinkBanner";
import TopBar from "@/components/commons/TopBar";
import { TagLight } from "@/components/commons/tag/TagLight";
import { TagMain } from "@/components/commons/tag/TagMain";
import { TagRate } from "@/components/commons/tag/TagRate";
import { IMAGES_DEFAUlT } from "@/constant/images";

interface BannerProps {
  page: "study" | "lecture";
}

const { study, lecture } = IMAGES_DEFAUlT;

export default function Header(props: BannerProps) {
  const { page } = props;
  const imageUrl = "";
  const isStudy = page === "study";
  const defaultImageUrl = isStudy ? study.src : lecture.src;
  const style = {
    backgroundImage: `url(${imageUrl || defaultImageUrl})`,
  };

  return (
    <>
      <section
        className={`flex flex-col  w-full items-center pb-10 bg-cover z-[2] bg-no-repeat relative ${
          isStudy && "before:-z-[2] before:bg-black/20 before:inset-0 before:absolute"
        }  `}
        style={style}>
        <TopBar variant="share" />
        <div className="flex items-center gap-1 mt-10 mb-4">
          <TagMain>온라인</TagMain>
          <TagLight>디자인</TagLight>
          {!isStudy && (
            <>
              <TagLight>유데미</TagLight>
              <TagRate>4.5</TagRate>
            </>
          )}
        </div>
        <h1
          className="mx-11 text-center text-[18px] font-semibold leading-[150%] tracking-[0.6px] break-keep"
          style={{ color: isStudy ? "white" : "black" }}>
          AI 활용 UXUI 포트폴리오 스터디 모집
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
        <LectureLinkBanner href="" />
      </section>
    </>
  );
}
