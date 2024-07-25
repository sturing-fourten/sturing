import ProfileCard from "@/components/domains/userProfile/ProfileCard";
import PeerReviewTagList from "@/components/domains/userProfile/PeerReviewTagList";
import RoleTagList from "@/components/domains/userProfile/RoleTagList";
import StudyHistory from "@/components/domains/userProfile/StudyHistory";
import SturingIndex from "@/components/domains/userProfile/SturingIndex";
import TopBar from "@/components/commons/TopBar";
import HorizontalDivider from "@/components/commons/HorizontalDivider";

const getProfileInfo = async (id: string) => {
  try {
    const response = await fetch(`${process.env.LOCAL_URL}/api/userProfile/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching profile", error);
  }
};

const getDoneStudyList = async (id: string) => {
  try {
    const url = `${process.env.LOCAL_URL}/api/my-study/list?userId=${id}&listType=DONE`;
    const response = await fetch(url);
    if (!response.ok) throw new Error("스터디 목록을 불러오는 데 실패했습니다.");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching Done StudyList", error);
  }
};

export default async function Profile({ params }: { params: { id: string } }) {
  const { id } = params;
  const profileData = await getProfileInfo(id);
  const doneStudyList = await getDoneStudyList(id);
  const {
    user: { sturingIndex },
  } = profileData;
  return (
    <>
      <div className="bg-gradient-to-br from-gradient-gray/30 to-gradient-to/30">
        <TopBar variant="back">{profileData.user.nickname}님의 프로필</TopBar>
        <HorizontalDivider addStyle="opacity-30" />
        <div className="px-4 pt-5 pb-7">
          <ProfileCard page="profile" profile={profileData} />
        </div>
      </div>
      <div className="bg-white pb-10">
        <SturingIndex sturingIndex={sturingIndex} />
        {/* <RoleTagList /> */}
        {/* <PeerReviewTagList /> */}
        <StudyHistory doneStudyList={doneStudyList} />
      </div>
    </>
  );
}
