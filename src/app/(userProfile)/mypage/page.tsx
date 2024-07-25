import HorizontalDivider from "@/components/commons/HorizontalDivider";
import TopBar from "@/components/commons/TopBar";
import PeerReviewTagList from "@/components/domains/userProfile/PeerReviewTagList";
import ProfileCard from "@/components/domains/userProfile/ProfileCard";
import RoleTagList from "@/components/domains/userProfile/RoleTagList";
import StudyHistory from "@/components/domains/userProfile/StudyHistory";
import StudyOverview from "@/components/domains/userProfile/StudyOverview";
import SturingIndex from "@/components/domains/userProfile/SturingIndex";
import { fetchDoneStudyListAction } from "@/lib/database/action/myStudyList";
import { getSession } from "@/lib/database/getSession";

const getMyProfileInfo = async () => {
  try {
    const session = await getSession();
    const id = session?.user?.id;
    const data = await (await fetch(`${process.env.LOCAL_URL}/api/userProfile/${id}`)).json();

    return data;
  } catch (error) {
    console.error("Error fetching profile", error);
  }
};

const getMyStudyCount = async () => {
  try {
    const session = await getSession();
    const id = session?.user?.id;

    const data = await (await fetch(`${process.env.LOCAL_URL}/api/my-study/list/count?userId=${id}`)).json();

    return data;
  } catch (error) {
    console.error("Error fetching profile", error);
  }
};

export default async function MyPage() {
  const myProfileData = await getMyProfileInfo();
  const myStudyCount = await getMyStudyCount();
  const myDoneStudyList = await fetchDoneStudyListAction();
  const {
    user: { sturingIndex },
  } = myProfileData;

  return (
    <>
      <div className="bg-gradient-to-br from-gradient-gray/30 to-gradient-to/30">
        <TopBar variant="back" isBackToHome showBookmark>
          마이페이지
        </TopBar>
        <HorizontalDivider addStyle="opacity-30" />
        <div className="px-4 pt-5 pb-7">
          <ProfileCard page="mypage" mypage={myProfileData} />
          <StudyOverview studyCount={myStudyCount} />
        </div>
      </div>
      <div className="bg-white pb-10">
        <SturingIndex sturingIndex={sturingIndex} />
        {/* <RoleTagList />
        <PeerReviewTagList /> */}
        <StudyHistory doneStudyList={myDoneStudyList} />
      </div>
    </>
  );
}
