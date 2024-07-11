import { TLectureInfoData } from "@/types/api/lecture";
import DetailInfo from "../DetailInfo";
import HashTag from "./elements/HashTag";
import { LECTURE_INFO } from "@/constant/lecture";

interface LectureInfoProps {
  lectureInfo: TLectureInfoData;
}

const { instructor, level } = LECTURE_INFO;

export default function LectureInfo({ lectureInfo }: LectureInfoProps) {
  return (
    <>
      <section className="pt-7 pb-10" id="lectureInfo">
        <div className="flex flex-col gap-3 justify-start">
          <DetailInfo icon={instructor.icon} title={instructor.title} content={lectureInfo?.instructor} />
          <DetailInfo icon={level.icon} title={level.title} content={lectureInfo?.level} />
        </div>
        <div className="flex items-center gap-[14px] mt-5">
          {lectureInfo?.tag.map((tag: string, index: number) => (
            <HashTag key={index} tag={tag} />
          ))}
        </div>
      </section>
    </>
  );
}
