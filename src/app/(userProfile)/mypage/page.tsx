import PeerReviewTagList from "@/components/domains/userProfile/PeerReviewTagList";
import ProfileCard from "@/components/domains/userProfile/ProfileCard";
import RoleTagList from "@/components/domains/userProfile/RoleTagList";

import StudyOverview from "@/components/domains/userProfile/StudyOverview";
import SturingIndex from "@/components/domains/userProfile/SturingIndex";

export default function MyPage() {
  return (
    <>
      <div className="px-4 pt-5 pb-7">
        <ProfileCard page="mypage" />
        <StudyOverview />
      </div>
      <div className="bg-white pb-10">
        <SturingIndex />
        <RoleTagList />
        <PeerReviewTagList />
      </div>
    </>
  );
}
