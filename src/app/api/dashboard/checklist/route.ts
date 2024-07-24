import connectDB from "@/lib/database/db";
import { Dashboard } from "@/schema/dashboardSchema";
import { startOfDay } from "date-fns";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const studyId = searchParams.get("studyId");
  const userId = searchParams.get("userId");

  try {
    connectDB();
    const dashboard = await Dashboard.findOne({ studyId }).select("checkList");

    if (!dashboard) {
      return Response.json({ message: "대시보드의 체크리스트를 찾을 수 없습니다." }, { status: 404 });
    }

    const userCheckList = dashboard.checkList.list.find((item: any) => item.userId.toString() === userId);

    if (!userCheckList) {
      return Response.json({ message: "해당 유저의 체크 리스트를 찾을 수 없습니다." }, { status: 404 });
    }

    return Response.json(userCheckList, { status: 200 });
  } catch (error) {
    return Response.json({ message: "실패" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  const { studyId, userId, newCheckItemDate, newCheckItemContent } = await request.json();

  if (!studyId || !userId || !newCheckItemDate || !newCheckItemContent) {
    return Response.json({ error: "필요한 모든 데이터가 제공되지 않았습니다." }, { status: 400 });
  }

  try {
    connectDB();
    const dashboard = await Dashboard.findOne({ studyId }).select("checkList");

    if (!dashboard) {
      return Response.json({ message: "대시보드의 체크리스트를 찾을 수 없습니다." }, { status: 404 });
    }

    const userCheckList = dashboard.checkList.list.find((item: any) => item.userId.toString() === userId);

    if (!userCheckList) {
      return Response.json({ message: "해당 유저의 체크 리스트를 찾을 수 없습니다." }, { status: 404 });
    }

    const contentItem = {
      content: newCheckItemContent,
      isChecked: false,
    };

    const parsedDate = new Date(newCheckItemDate);
    const parsedDateForCompare = startOfDay(parsedDate).getTime();
    const existingItem = userCheckList.data.find((item: any) => {
      const itemDateForCompare = startOfDay(new Date(item.date)).getTime();
      return itemDateForCompare === parsedDateForCompare ? item : null;
    });

    if (existingItem) {
      existingItem.contentList.push(contentItem);
    } else {
      const newCheckItem = {
        date: parsedDate,
        contentList: [contentItem],
      };

      userCheckList.data.push(newCheckItem);
    }
    await dashboard.save();

    return Response.json({ message: "체크 리스트가 성공적으로 추가되었습니다." }, { status: 200 });
  } catch (error) {
    return Response.json({ message: "실패" }, { status: 500 });
  }
}

export async function PATCH(request: Request) {
  const { studyId, checkItemId } = await request.json();

  if (!studyId || !checkItemId) {
    return Response.json({ error: "필요한 모든 데이터가 제공되지 않았습니다." }, { status: 400 });
  }

  try {
    connectDB();

    const dashboard = await Dashboard.findOne({ studyId }).select("checkList");
    if (!dashboard) {
      return Response.json({ message: "대시보드를 찾을 수 없습니다." }, { status: 404 });
    }

    // checkItemId가 동일한 체크리스트 항목 조회
    let targetCheckItem = null;
    for (const checkListItem of dashboard.checkList.list) {
      for (const checkListDataItem of checkListItem.data) {
        targetCheckItem = checkListDataItem.contentList.find(
          (contentListItem: any) => contentListItem._id.toString() === checkItemId,
        );
        if (targetCheckItem) break;
      }
      if (targetCheckItem) break;
    }

    if (!targetCheckItem) {
      return Response.json({ message: "해당 체크 리스트 항목을 찾을 수 없습니다." }, { status: 404 });
    }
    // isChecked 토글
    targetCheckItem.isChecked = !targetCheckItem.isChecked;

    // 변경된 대시보드 저장
    await dashboard.save();

    return Response.json({ message: "체크 리스트 상태가 성공적으로 업데이트되었습니다." }, { status: 200 });
  } catch (error) {
    return Response.json({ message: "실패" }, { status: 500 });
  }
}
