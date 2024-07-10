import HorizontalDivider from "@/components/commons/HorizontalDivider";
import TopBar from "@/components/commons/TopBar";
import PeerReviewTagList from "@/components/domains/userProfile/PeerReviewTagList";
import ProfileCard from "@/components/domains/userProfile/ProfileCard";
import RoleTagList from "@/components/domains/userProfile/RoleTagList";

import StudyOverview from "@/components/domains/userProfile/StudyOverview";
import SturingIndex from "@/components/domains/userProfile/SturingIndex";

export default function MyPage() {
  return (
    <>
      <div className="bg-gradient-to-br from-gradient-gray/30 to-gradient-to/30">
        <TopBar variant="chat" showBookmark>
          마이페이지
        </TopBar>
        <HorizontalDivider addStyle="opacity-30" />
        <div className="px-4 pt-5 pb-7">
          <ProfileCard page="mypage" />
          <StudyOverview />
        </div>
      </div>
      <div className="bg-white pb-10">
        <SturingIndex />
        <RoleTagList />
        <PeerReviewTagList />
      </div>
    </>
  );
}
