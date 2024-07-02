import PhotoProofThumbnail from "./PhotoProofThumbnail";
import DashboardCardPaginationLayout from "./DashboardCardPaginationLayout";
import DashboardCardTitle from "../DashboardCardTitle";
import WriteBoardLink from "./WriteBoardLink";

export default function StudyPhotoProof() {
  return (
    <DashboardCardPaginationLayout hasMore={true}>
      <DashboardCardTitle isEditing={true} title="사진 인증" />

      <ul className="grid grid-cols-3 gap-4 justify-between">
        {[1, 2, 3, 4, 5, 6].map((photo, index) => (
          <PhotoProofThumbnail key={index} />
        ))}
      </ul>
    </DashboardCardPaginationLayout>
  );
}
