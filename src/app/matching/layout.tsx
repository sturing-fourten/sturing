import TopBar from "@/components/commons/TopBar";

export default function Layout({ steps }: { steps: React.ReactNode }) {
  return (
    <>
      <TopBar variant="back" />
      <div className="flex flex-col py-5 px-4 min-h-screen relative w-screen sm:w-[600px]">{steps}</div>
    </>
  );
}
