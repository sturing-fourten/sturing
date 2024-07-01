import DetailInfo from "../DetailInfo";
import HashTag from "./elements/HashTag";
import { LECTURE_INFO } from "@/constant/lecture";

const { instructor, level } = LECTURE_INFO;

export default function LectureInfo() {
  return (
    <>
      <section className="pt-7 pb-10" id="lectureInfo">
        <div className="flex flex-col gap-3 justify-start">
          <DetailInfo icon={instructor.icon} title={instructor.title} content="Leap Year Learning" />
          <DetailInfo icon={level.icon} title={level.title} content="모든수준" />
        </div>
        <div className="flex items-center gap-[14px] mt-5">
          <HashTag tag="AI" />
          <HashTag tag="사무" />
          <HashTag tag="테크" />
          <HashTag tag="생성형AI" />
        </div>
      </section>
    </>
  );
}
