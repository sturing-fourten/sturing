import AlertMessage from "@/components/commons/AlertMessage";
import CardList from "@/components/commons/CardList";
import { StudyRecruitCard } from "@/components/commons/card/StudyRecruitCard";
import Button from "@/components/commons/Button";
import Link from "next/link";
import NoResultText from "@/components/commons/NoResultText";
import { CATEGORY_MAP_TO_KO } from "@/utils/categoryMap";
import { getMatchingStudyList } from "@/lib/database/action/matching";

export default async function SuccessPage() {
  const data = await getMatchingStudyList();
  const { studyList, userNickname, userCategory } = data;

  return (
    <div className="flex flex-col gap-[30px] px-4 w-full min-h-dvh">
      <div className="flex flex-1 flex-col gap-[70px] w-full mt-[70px]">
        <AlertMessage varient="matching" />
        <div className="flex flex-col gap-5 w-full">
          <h1 className="text-gray-900 text-[16px] font-[600] tracking-[-0.32px] leading-[24px]">{`${
            userNickname || "회원"
          }님에게 딱 맞는 스터디 추천`}</h1>
          <CardList isSingleLine>
            {studyList?.length !== 0 ? (
              studyList?.map((study) => <StudyRecruitCard key={study.id} isMini={false} recruitCardData={study} />)
            ) : (
              <NoResultText>{`${
                userCategory ? CATEGORY_MAP_TO_KO[userCategory] : "관심"
              }분야의 첫번째 스터디를 개설해 보세요!`}</NoResultText>
            )}
          </CardList>
        </div>
      </div>
      <div className="py-4 bg-white flex flex-col gap-3">
        <Link href="/mypage">
          <Button
            type="button"
            varient="filled"
            addStyle="w-full h-[50px] bg-main-500 rounded-[5px] shrink-0 text-white font-semibold text-4">
            내 프로필 보러가기
          </Button>
        </Link>
        <Link href="/">
          <Button
            type="button"
            varient="filled"
            addStyle="w-full h-[50px] bg-main-100 rounded-[5px] shrink-0 text-main-500 font-semibold text-4">
            홈으로 가기
          </Button>
        </Link>
      </div>
    </div>
  );
}
