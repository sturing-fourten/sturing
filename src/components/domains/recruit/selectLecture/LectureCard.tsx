import { TLectureListCardData } from "@/types/api/lecture";

interface LectureCardProps {
  lecture: TLectureListCardData;
  isSelected: boolean;
  setIsLecture: (lecture: string) => void;
}

export default function LectureCard({ lecture, isSelected, setIsLecture }: LectureCardProps) {
  const handleCardClick = () => {
    if (isSelected) {
      setIsLecture("");
    } else {
      setIsLecture(lecture.id);
    }
  };

  return (
    <div
      className={`w-full px-5 py-6 bg-white rounded-lg border flex justify-between items-start ${
        isSelected ? "border-main-500" : "border-neutral-200"
      }`}>
      <button type="button" onClick={handleCardClick} className="flex w-full">
        <div className="flex-col justify-start items-start gap-1 inline-flex">
          <div className="text-sm font-semibold text-left leading-snug">{lecture.title}</div>
          <p className="text-[12px] text-gray-600 text-left font-semibold leading-snug">{lecture.instructor}</p>
        </div>
      </button>
    </div>
  );
}
