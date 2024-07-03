import HorizontalDivider from "@/components/commons/HorizontalDivider";
import Title from "./Title";
import RoleTag from "./RoleTag";

export default function RoleTagList() {
  return (
    <>
      <HorizontalDivider />
      <section className="px-4 py-5">
        <Title>
          역할 태그 <span className="text-main-500 ml-2">{`4`}</span>
        </Title>
        <div className="grid grid-cols-2 gap-2 mt-[29px]">
          <RoleTag role="leader" count={"1"} />
          <RoleTag role="schedule" count={"1"} />
          <RoleTag role="environment" count={"1"} />
          <RoleTag role="attendance" count={"1"} />
        </div>
      </section>
      <HorizontalDivider />
    </>
  );
}
