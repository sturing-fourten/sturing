import { headers } from "next/headers";
import Link from "next/link";

export default function TapBar() {
  const headersList = headers();
  const headerPathname = headersList.get("x-pathname") || "";

  const className =
    "w-full flex justify-center items-center text-4 tracking-[-0.48px] leading-[24px] focus:text-gray-1000 focus:font-semibold";
  const currentPageText = "text-gray-1000 font-semibold";
  const notCurrentPageText = "text-gray-700 font-medium";

  return (
    <div className="sticky z-sticky top-[54px] bg-white w-full h-[48px] flex justify-between items-center px-4 py-3 border-gray-300 border-b">
      <Link href={"/"} className={`${className} ${headerPathname === "/" ? currentPageText : notCurrentPageText}`}>
        추천
      </Link>
      <Link
        href={"/search"}
        className={`${className} ${headerPathname === "/search" ? currentPageText : notCurrentPageText}`}>
        검색
      </Link>
      <Link
        href={"/mystudy"}
        className={`${className} ${headerPathname.includes("/mystudy") ? currentPageText : notCurrentPageText}`}>
        내 스터디
      </Link>
    </div>
  );
}
