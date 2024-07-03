import { ICONS } from "@/constant/icons";

interface SelectedLectureCardProps {
  onClick: () => void;
}

export default function SelectedLectureCard({ onClick }: SelectedLectureCardProps) {
  return (
    <article className="w-full px-5 py-6 bg-white rounded-lg border border-neutral-200 flex justify-between items-start">
      <div className="flex-col justify-start items-start gap-1 inline-flex">
        <div className="text-sm font-semibold leading-snug">
          {"블렌더 완벽 가이드: 초심자를 위한 3D 모델링 마스터하기"}
        </div>
        <p className="text-neutral-400 text-xs font-medium leading-none">GameDev.tv Team</p>
      </div>
      <button onClick={onClick}>
        <img src={ICONS.close.src} alt={ICONS.close.alt} />
      </button>
    </article>
  );
}
