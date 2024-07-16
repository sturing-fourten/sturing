import ProfileCard from "@/components/domains/userProfile/ProfileCard";
import PeerReviewTagList from "@/components/domains/userProfile/PeerReviewTagList";
import RoleTagList from "@/components/domains/userProfile/RoleTagList";
import StudyHistory from "@/components/domains/userProfile/StudyHistory";
import SturingIndex from "@/components/domains/userProfile/SturingIndex";
import TopBar from "@/components/commons/TopBar";
import HorizontalDivider from "@/components/commons/HorizontalDivider";

export const getProfileInfo = async (id: string) => {
  try {
    const response = await fetch(`${process.env.LOCAL_URL}/api/userProfile/${id}`);

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching profile", error);
  }
};

export default async function Profile({ params }: { params: { id: string } }) {
  const { id } = params;
  const profileData = await getProfileInfo(id);
  console.log(profileData);
  return (
    <>
      <div className="bg-gradient-to-br from-gradient-gray/30 to-gradient-to/30">
        <TopBar variant="chat" />
        <HorizontalDivider addStyle="opacity-30" />
        <div className="px-4 pt-5 pb-7">
          <ProfileCard page="profile" profile={profileData} />
        </div>
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