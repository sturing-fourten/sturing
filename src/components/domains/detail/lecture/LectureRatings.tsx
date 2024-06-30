import RatingCards from "./elements/RatingCards";
import { ICONS } from "@/constant/icons";
import { TagRate } from "@/components/commons/tag/TagRate";
import Link from "next/link";
import Image from "next/image";
import Title from "../Title";

export default function LectureRatings() {
  return (
    <>
      <section id="rating">
        <div className="flex items-center justify-between mb-5">
          <div className="inline-flex items-center gap-2">
            <Title>
              강의 평점 <span className="text-main-500">10개</span>
            </Title>
            <TagRate>4.5</TagRate>
          </div>
          <Link href="">
            <Image src={ICONS.rightArrowBlack.src} alt={ICONS.rightArrowBlack.alt} width={24} height={24} />
          </Link>
        </div>
        <RatingCards />
      </section>
    </>
  );
}
