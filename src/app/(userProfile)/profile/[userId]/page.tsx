import ProfileCard from "@/components/domains/userProfile/ProfileCard";
import PeerReviewTagList from "@/components/domains/userProfile/PeerReviewTagList";
import RoleTagList from "@/components/domains/userProfile/RoleTagList";
import StudyHistory from "@/components/domains/userProfile/StudyHistory";
import SturingIndex from "@/components/domains/userProfile/SturingIndex";

export default function page() {
  return (
    <>
      <div className="px-4 pt-5 pb-7">
        <ProfileCard page="profile" />
      </div>
      <div className="bg-white pb-10">
        <SturingIndex />
        <RoleTagList />
        <PeerReviewTagList />
        <StudyHistory />
      </div>
    </>
  );
}
