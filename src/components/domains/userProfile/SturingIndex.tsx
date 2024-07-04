import HorizontalDivider from "@/components/commons/HorizontalDivider";
import Title from "./Title";

import SturingProgressBar from "./SturingProgressBar";

export default function SturingIndex() {
  return (
    <>
      <section className="w-full px-4 py-7">
        <Title>스터링 지수</Title>
        <div className="mt-[14px] w-full px-6 py-5 border border-gray-300 rounded-[5px]">
          <SturingProgressBar progress={80} />
          <HorizontalDivider addStyle="my-6" />
          <div className="text-sm tracking-[-0.42px] flex items-center justify-between">
            <p className="font-medium">{`팀원 희망률 100%`}</p>
            <p className="text-gray-700">{`20명 중 20명이 희망`}</p>
          </div>
        </div>
      </section>
    </>
  );
}
