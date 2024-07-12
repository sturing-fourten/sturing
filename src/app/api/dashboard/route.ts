import connectDB from "@/lib/database/db";
import { Dashboard } from "@/schema/dashboardSchema";

export async function GET(request: Request) {
  connectDB();

  try {
    const { searchParams } = new URL(request.url);
    const studyId = searchParams.get("studyId");
    if (!studyId) throw new Error("대시보드 정보가 없습니다.");
    const dashboard = await Dashboard.findOne({ studyId });
    return Response.json(dashboard);
  } catch (error: any) {
    throw new Error(error);
  }
}
