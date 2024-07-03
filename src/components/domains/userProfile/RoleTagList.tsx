import HorizontalDivider from "@/components/commons/HorizontalDivider";
import Title from "./Title";

export default function RoleTagList() {
  return (
    <>
      <HorizontalDivider />
      <section className="px-4 py-5">
        <Title>
          역할 태그 <span className="text-main-500 ml-2">{`4`}</span>
        </Title>
      </section>
      <HorizontalDivider />
    </>
  );
}
