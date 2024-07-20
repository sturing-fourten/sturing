import connectDB from "@/lib/database/db";
import { Dashboard } from "@/schema/dashboardSchema";

export async function PATCH(request: Request) {
  const { functionType, dashboardId, userId } = await request.json();

  if (!functionType) {
    return Response.json({ error: "기능 타입 이 필요합니다." }, { status: 400 });
  }
  if (!dashboardId) {
    return Response.json({ error: "대시보드 id 가 필요합니다." }, { status: 400 });
  }
  if (!userId) {
    return Response.json({ error: "유저 id 가 필요합니다." }, { status: 400 });
  }

  try {
    connectDB();
    const dashboard = await Dashboard.findById(dashboardId);
    if (!dashboard) {
      return Response.json({ message: "대시보드 조회에 실패했습니다." }, { status: 200 });
    }
    let updateQuery;
    switch (functionType) {
      case "progressGauge":
        updateQuery = { "progressGauge.isActive": !dashboard.progressGauge.isActive };
        break;
      case "attendance":
        updateQuery = { "attendance.isActive": !dashboard.attendance.isActive };
        break;
      case "checkList":
        updateQuery = { "checkList.isActive": !dashboard.checkList.isActive };
        break;
    }
    await Dashboard.findByIdAndUpdate(dashboardId, { $set: updateQuery }, { new: true });

    return Response.json({ message: "스터디가 시작 되었습니다." }, { status: 200 });
  } catch (error: any) {
    return Response.json({ message: "요청을 처리할 수 없습니다." }, { status: 404 });
  }
}
