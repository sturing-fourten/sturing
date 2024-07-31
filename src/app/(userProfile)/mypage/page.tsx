"use client";
import HorizontalDivider from "@/components/commons/HorizontalDivider";
import TopBar from "@/components/commons/TopBar";
import PeerReviewTagList from "@/components/domains/userProfile/PeerReviewTagList";
import ProfileCard from "@/components/domains/userProfile/ProfileCard";
import RoleTagList from "@/components/domains/userProfile/RoleTagList";
import StudyHistory from "@/components/domains/userProfile/StudyHistory";
import StudyOverview from "@/components/domains/userProfile/StudyOverview";
import SturingIndex from "@/components/domains/userProfile/SturingIndex";
import { fetchDoneStudyListAction } from "@/lib/database/action/myStudyList";
import { getMyProfileInfo, getMyStudyCount } from "@/lib/database/action/mypage";
import { EditProfileType } from "@/types/editProfile";
import { MatchingType } from "@/types/matching";
import { TMyStudy, TMyStudyTabMenuLinkUnderlinedItem } from "@/types/study";
import { useEffect, useState } from "react";
import Loading from "../../../components/commons/Loading";

export default function MyPage() {
  const [myProfileData, setMyProfileData] = useState<{ user: EditProfileType; matching: MatchingType } | null>(null);
  const [myStudyCount, setMyStudyCount] = useState<TMyStudyTabMenuLinkUnderlinedItem[] | null>(null);
  const [myDoneStudyList, setMyDoneStudyList] = useState<TMyStudy[] | null>(null);
  const [sturingIndex, setSturingIndex] = useState(50);

  useEffect(() => {
    const fetchData = async () => {
      const profileData = await getMyProfileInfo();
      const studyCount = await getMyStudyCount();
      const doneStudyList = await fetchDoneStudyListAction();
      setMyProfileData(profileData);
      setMyStudyCount(studyCount);
      setMyDoneStudyList(doneStudyList);
      setSturingIndex(profileData.user.sturingIndex);
    };

    fetchData();
  }, []);

  if (!myProfileData || !myStudyCount || !myDoneStudyList) {
    return <Loading />;
  }

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
