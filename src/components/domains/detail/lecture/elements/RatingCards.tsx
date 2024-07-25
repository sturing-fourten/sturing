import { format, parseISO } from "date-fns";
import { ko } from "date-fns/locale";
import RatingTag from "./RatingTag";

interface RatingCardsProps {
  reviewData: {
    reviewerId: string;
    reviewer: string;
    rating: number;
    comment: string;
    createdAt: string;
    _id: string;
  }[];
  reviewListPage?: boolean;
}

export default function RatingCards({ reviewData, reviewListPage }: RatingCardsProps) {
  const formatDate = (created_at: string) => {
    const date = parseISO(created_at);
    return format(date, "yyyy.MM.dd", { locale: ko });
  };

  return (
    <>
      {reviewListPage ? (
        <ul className="flex flex-col gap-[14px] pb-12">
          {reviewData.map(({ reviewer, rating, comment, _id, createdAt }) => (
            <li
              key={_id}
              className="justify-start list-none border border-gray-300 rounded-[5px] w-full px-4 py-[13px] text-[14px] sm:text-base leading-[150%] tracking-[-0.28px]">
              <div className="flex items-center gap-2">
                <h3 className="text-gray-700 text-[14px] font-semibold">{reviewer}</h3>
                <RatingTag rating={rating} />
              </div>
              <p className="text-gray-1000 mt-[6px] mb-[6px] text-[14px] font-semibold">{comment}</p>
              <p className="text-gray-600 text-[14px] font-semibold">{formatDate(createdAt)}</p>
            </li>
          ))}
        </ul>
      ) : (
        <ul className="flex flex-col gap-[14px] pb-12">
          {reviewData.slice(0, 3).map(({ reviewer, rating, comment, _id, createdAt }) => (
            <li
              key={_id}
              className="justify-start list-none border border-gray-300 rounded-[5px] w-full px-4 py-[13px] text-[14px] sm:text-base leading-[150%] tracking-[-0.28px]">
              <div className="flex items-center gap-2">
                <h3 className="text-gray-700 text-[14px] font-semibold">{reviewer}</h3>
                <RatingTag rating={rating} />
              </div>
              <p className="text-gray-1000 mt-[6px] mb-[6px] text-[14px] font-semibold">{comment}</p>
              <p className="text-gray-600 text-[14px] font-semibold">{formatDate(createdAt)}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
