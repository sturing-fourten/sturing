import { STUDY_CATEGORY_MENU } from "@/constant/study";
import { TLectureInfoData, TLectureListCardData } from "@/types/api/lecture";
import { StudyCategoryMenu } from "@/types/study";

interface LectureCardProps {
  existingLecture?: TLectureInfoData;
  lecture?: TLectureListCardData;
  isSelected: boolean;
  setIsLecture: (lecture: string) => void;
}

export default function LectureCard({ existingLecture, lecture, isSelected, setIsLecture }: LectureCardProps) {
  const handleCardClick = () => {
    if (isSelected) {
      setIsLecture("");
    } else {
      const lectureId = existingLecture?._id || lecture?.id || "";
      setIsLecture(lectureId);
    }
  };

  const lecturedata = existingLecture || lecture;

  if (!lecturedata) {
    return null;
  }

  return (
    <div
      className={`w-full px-4 py-6 bg-white rounded-lg border flex justify-between items-start ${
        isSelected ? "border-main-500" : "border-neutral-200"
      }`}>
      <button type="button" onClick={handleCardClick} className="flex w-full">
        <div className="flex flex-col gap-1 w-full">
          <div className="flex items-center gap-2 w-full">
            <p className="inline-flex items-center py-[2px] px-[6px] bg-main-500 text-white text-xs font-semibold rounded-[3px] leading-snug whitespace-nowrap">
              {STUDY_CATEGORY_MENU[lecturedata.category as keyof StudyCategoryMenu].alt}
            </p>
            <p className="text-sm font-semibold text-left leading-snug truncate overflow-hidden whitespace-nowrap flex-grow">
              {lecturedata.title}
            </p>
          </div>
          <p className="text-[12px] text-gray-600 text-left font-semibold leading-snug">{lecturedata.instructor}</p>
        </div>
      </button>
    </div>
  );
}
