import MyStudyTabBarLinkUnderlined from "@/components/commons/MyStudyTabBarLinkUnderlined";
import { getSession } from "@/lib/database/getSession";

interface IStudyListProps {
  children: React.ReactNode;
}

export default async function StudyList({ children }: IStudyListProps) {
  const session = await getSession();
  const userId = session?.user?.id;
  const studyTabMenuList = await (
    await fetch(`${process.env.LOCAL_URL}/api/my-study/list/count?userId=${userId}`)
  ).json();

  return (
    <article className="w-full pt-10">
      <p className="mb-4 px-4 text-black text-xl font-semibold leading-7">스터디 리스트</p>

      <MyStudyTabBarLinkUnderlined
        defaultSegment="/mystudy/"
        tabMenuList={studyTabMenuList}
        stickyOption="sticky top-[54px] z-1"
      />
      {children}
    </article>
  );
}
