import connectDB from "@/lib/database/db";
import { Lecture } from "@/schema/lectureSchema";
import categoryMap from "@/utils/categoryMap";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category")?.split(",");
  const search = searchParams.get("search");

  //헤더로 유저정보 받기 (북마크 여부 확인)

  await connectDB();

  let query: { [key: string]: any } = {};

  if (category && category.length > 0) {
    query.category = { $in: category };
  }

  if (search) {
    const mappedCategory = categoryMap[search];
    query.$or = [
      { title: { $regex: search, $options: "i" } },
      { category: mappedCategory || { $regex: search, $options: "i" } },
    ];
  }

  try {
    const lectureListData = await Lecture.find(query);

    const lectureList: {
      id: string;
      online: boolean;
      category: string;
      platform: string;
      rating: number;
      title: string;
      instructor: string;
    }[] = [];

    if (lectureListData) {
      for (const lecture of lectureListData) {
        lectureList.push({
          id: lecture._id.toString(),
          online: lecture.online,
          category: lecture.category,
          platform: lecture.platform,
          rating: lecture.rating,
          title: lecture.title,
          instructor: lecture.instructor,
        });
      }
    }
    //북마크 여부  Promise.all 로 추가

    return Response.json({ lectureList });
  } catch (error: any) {
    console.error("Error fetching lectures:", error);
    return new Response(JSON.stringify({ error: "강의 리스트를 불러오는데 실패하였습니다." }), {
      status: 500,
    });
  }
}
