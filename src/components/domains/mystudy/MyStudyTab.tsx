import MyStudyTabBarLinkUnderlined from "@/components/commons/MyStudyTabBarLinkUnderlined";
import { getSession } from "@/lib/database/getSession";

export default async function MyStudyTab() {
  const session = await getSession();
  const userId = session?.user?.id;
  const myStudyTabMenuList = await (
    await fetch(`${process.env.LOCAL_URL}/api/my-study/list/count?userId=${userId}`)
  ).json();

  return (
    <article className="w-full pt-10">
      <p className="mb-4 px-4 text-black text-xl font-semibold leading-7">스터디 리스트</p>
      <MyStudyTabBarLinkUnderlined myStudyTabMenuList={myStudyTabMenuList} />
    </article>
  );
}
