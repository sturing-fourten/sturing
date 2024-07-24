import connectDB from "@/lib/database/db";
import { Study } from "@/schema/studySchema";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const studyId = searchParams.get("studyId");
  if (!studyId) {
    return Response.json({ error: "스터디 id 가 필요합니다." }, { status: 400 });
  }

  connectDB();

  try {
    const study = await Study.findById(studyId).select("startDate endDate meeting title");

    return Response.json(study);
  } catch (error: any) {
    return Response.json("error");
  }
}
