import RecruitInfo from "./RecruitInfo";
import RecruitedMembersList from "./RecruitedMembersList";
import RecruitComments from "./RecruitComments";
import { TLectureInfoData } from "@/types/api/lecture";
import { TComment, TStudyDetailInfoData } from "@/types/api/study";
import { getSession } from "@/lib/database/getSession";
import DetailTabMenu from "@/components/commons/DetailTabMenu";

interface IContentsProps {
  study: TStudyDetailInfoData["study"];
  lecture: TStudyDetailInfoData["lecture"];
  memberList: TStudyDetailInfoData["teamMemberList"];
  commentList: TComment[];
}

export default async function Contents({ study, lecture, memberList, commentList }: IContentsProps) {
  const session = await getSession();
  const userId = session?.user?.id;
  return (
    <>
      <div className="mb-[73px]" id="recruit_Info">
        <DetailTabMenu type="study" />
        <div className="px-4 bg-gray-100 pb-12">
          <RecruitInfo study={study} lecture={lecture} />
          <RecruitedMembersList study={study} memberList={memberList} />
          <RecruitComments commentList={commentList} studyId={study._id} userId={userId || ""} />
        </div>
      </div>
    </>
  );
}
