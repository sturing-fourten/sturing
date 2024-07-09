import { ICONS } from "@/constant/icons";

const FullStar = () => <img src={ICONS.star.src} width={14} height={14} alt={ICONS.star.alt} />;
const EmptyStar = () => <img src={ICONS.starEmpty.src} width={14} height={14} alt={ICONS.starEmpty.alt} />;

export default function RatingTag({ rating }: { rating: number }) {
  const fullStars = rating;
  const emptyStars = 5 - fullStars;

  return (
    <div className="flex items-center shrink-0">
      {Array(fullStars).fill(<FullStar />)}
      {Array(emptyStars).fill(<EmptyStar />)}
    </div>
  );
}
