import Image from "next/image";
import { downArrowDark } from "@/../public/icons/icons";
import PhotoProofThumbnail from "./PhotoProofThumbnail";
import DashboardCardTitle from "../DashboardCardTitle";

export default function StudyPhotoProof() {
  const isEditing = true;
  return (
    <article className="py-6 px-4 bg-white rounded border border-gray-300 relative before:absolute before:content-[''] before:bg-gradient-to-b before:from-transparent before:to-white before:top-0 before:left-[-1px] before:z-[1] before:w-[calc(100%+2px)] before:h-[calc(100%+1px)]">
      <DashboardCardTitle isEditing={isEditing} title="사진 인증" />

      <ul className="grid grid-cols-3 gap-4 justify-between mt-4">
        {[1, 2, 3, 4, 5, 6].map((photo, index) => (
          <PhotoProofThumbnail key={index} />
        ))}
        <button className="col-start-2 z-[2] flex justify-center">
          <Image src={downArrowDark} alt="" width={24} height={24} />
        </button>
      </ul>
    </article>
  );
}
// min-w-[98px] min-h-[98px] max-w-[200px] max-h-[200px]
