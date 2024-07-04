"use client";

import HorizontalDivider from "@/components/commons/HorizontalDivider";
import Title from "./Title";
import RoleTag from "./RoleTag";
import useOpenToggle from "@/hooks/useOpenToggle";

export default function RoleTagList() {
  const { isOpen, openToggle } = useOpenToggle();
  return (
    <>
      <HorizontalDivider />
      <section className="px-4 py-5">
        <Title openToggle={openToggle} isOpen={isOpen}>
          역할 태그 <span className="text-main-500 ml-2">{`4`}</span>
        </Title>
        {isOpen && (
          <div className="grid grid-cols-2 gap-2 mt-[29px]">
            <RoleTag role="leader" count={"1"} />
            <RoleTag role="schedule" count={"1"} />
            <RoleTag role="environment" count={"1"} />
            <RoleTag role="attendance" count={"1"} />
          </div>
        )}
      </section>
      <HorizontalDivider />
    </>
  );
}
