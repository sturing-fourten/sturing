import { InsideMenu } from "@/components/commons/card/element/InsideMenu";
import StudyApplyingCard from "@/components/commons/card/StudyApplyingCard";
import StudyRecruitingCard from "@/components/commons/card/StudyRecruitingCard";
import NoList from "@/components/domains/mystudy/NoList";
import {
  fetchRecruitStartMemberStudyListAction,
  fetchRecruitStartOwnerStudyListAction,
} from "@/lib/database/action/myStudyList";
import { useMyStudyListStore } from "@/store/myStudyListStore";
import { TMyStudy } from "@/types/study";

const menuList = [
  {
    id: "RECRUIT_START_OWNER",
    title: "모집 중",
  },
  {
    id: "RECRUIT_START_MEMBER",
    title: "지원 중",
  },
];

export default async function WaitingTabPage() {
  const myStudyListType = useMyStudyListStore.getState().myStudyListType;
  let myStudyList: TMyStudy[] = [];

  if (myStudyListType === "RECRUIT_START_OWNER") {
    myStudyList = await fetchRecruitStartOwnerStudyListAction();
  }
  if (myStudyListType === "RECRUIT_START_MEMBER") {
    myStudyList = await fetchRecruitStartMemberStudyListAction();
  }

  return (
    <>
      <nav className="flex gap-3 pt-5 px-4">
        {menuList.map((item, index) => (
          <InsideMenu key={index} id={item.id} title={item.title} />
        ))}
      </nav>
      {myStudyListType === "RECRUIT_START_MEMBER" && (
        <div className="flex items-center gap-[6px] pt-5 px-4">
          <span className="flex justify-center items-center text-center text-[11px] tracking-[-0.22px] leading-[16px] font-semibold bg-main-100 text-main-500 rounded-full w-[13px] h-[13px]">
            !
          </span>
          <span className="text-[13px] tracking-[-0.22px] leading-[16px] text-gray-900">
            모집 완료 전까지 지원 취소가 가능합니다.
          </span>
        </div>
      )}
      <div className="flex flex-col py-5 gap-4 px-4">
        {myStudyList &&
          myStudyListType === "RECRUIT_START_OWNER" &&
          (myStudyList.length === 0 ? (
            <NoList>모집 중 스터디가 없어요.</NoList>
          ) : (
            myStudyList.map((study) => <StudyRecruitingCard key={study._id.toString()} study={study} />)
          ))}
        {myStudyList &&
          myStudyListType === "RECRUIT_START_MEMBER" &&
          (myStudyList.length === 0 ? (
            <NoList>지원 중 스터디가 없어요.</NoList>
          ) : (
            myStudyList.map((study) => <StudyApplyingCard key={study._id.toString()} study={study} />)
          ))}
      </div>
    </>
  );
}
