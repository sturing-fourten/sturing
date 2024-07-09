import { getLectureAction } from "@/lib/database/action/lecture";
import connectDB from "@/lib/database/db";

export async function GET(req: Request, { params }: { params: { id: string } }) {
  const id = params.id;

  try {
    await connectDB();

    const lecture = await getLectureAction(id as string);
    console.log(lecture);

    return Response.json({ lecture });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: "강의를 불러오는데 실패하였습니다." }), {
      status: 500,
    });
  }
}
