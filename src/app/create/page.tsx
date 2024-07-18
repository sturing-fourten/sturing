import { createStudyAction, deleteStudyAction } from "@/lib/database/action/studyList";

export default async function Page() {
  const studyList = await (await fetch(`${process.env.LOCAL_URL}/api/study/list`)).json();

  return (
    <>
      <h1>page Component</h1>
      <form action={createStudyAction}>
        <button className="bg-red-200">createStudyAction</button>
      </form>

      {studyList.map((study: any, index: number) => (
        <h2 key={index}>
          {study.title}
          <form action={deleteStudyAction}>
            <input type="hidden" name="_id" value={study._id} />
            <button>삭제</button>
          </form>
        </h2>
      ))}
    </>
  );
}
