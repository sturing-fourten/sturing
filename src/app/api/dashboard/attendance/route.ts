import connectDB from "@/lib/database/db";
import { Dashboard } from "@/schema/dashboardSchema";

export async function PATCH(request: Request) {
  const { dashboardId, userId, date } = await request.json();

  if (!dashboardId || !userId || !date) {
    return Response.json({ error: "필요한 모든 데이터가 제공되지 않았습니다." }, { status: 400 });
  }

  try {
    connectDB();
    const dashboard = await Dashboard.findById(dashboardId);
    if (!dashboard) {
      return Response.json({ message: "대시보드를 찾을 수 없습니다." }, { status: 404 });
    }

    const targetDate = new Date(date);
    targetDate.setHours(0, 0, 0, 0); // 지정된 날짜의 00:00:00으로 설정

    const userAttendance = dashboard.attendance.list.find(
      (item: { userId: { toString: () => any } }) => item.userId.toString() === userId,
    );

    if (!userAttendance) {
      return Response.json({ message: "해당 유저의 출석 데이터를 찾을 수 없습니다." }, { status: 404 });
    }

    const attendanceData = userAttendance.data.find((entry: { date: Date }) => {
      const entryDate = new Date(entry.date);
      return entryDate.getDate() === targetDate.getDate();
    });

    if (attendanceData) {
      attendanceData.isAttended = true;
    } else {
      return Response.json({ message: "지정된 날짜에 대한 출석 데이터가 없습니다." }, { status: 404 });
    }

    await dashboard.save();

    return Response.json({ message: "출석 상태가 성공적으로 업데이트되었습니다." }, { status: 200 });
  } catch (error) {
    return Response.json({ message: "실패" }, { status: 500 });
  }
}
