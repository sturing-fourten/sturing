import { PEER_REVIEW_LIST } from "@/constant/teammate-review";

interface PeerReviewTagProps {
  count: string;
  type: "FEEDBACK" | "PUNCTUAL" | "ATTEND" | "FULFILL";
}

export default function PeerReviewTag({ count, type }: PeerReviewTagProps) {
  return (
    <>
      <div className="bg-gray-100 rounded-[5px] p-3 text-sm font-medium flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={PEER_REVIEW_LIST[type].image.src} alt={PEER_REVIEW_LIST[type].image.alt} className="w-4 h-4" />
          {PEER_REVIEW_LIST[type].text}
        </div>
        <p>{count}</p>
      </div>
    </>
  );
}
