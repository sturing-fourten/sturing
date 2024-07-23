import connectDB from "@/lib/database/db";
import { LectureBookmark } from "@/schema/bookmarkSchema";
import { Lecture } from "@/schema/lectureSchema";
import { CATEGORY_MAP_TO_ENG } from "@/utils/categoryMap";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category")?.split(",").filter(Boolean);
  const search = searchParams.get("search");
  const page = parseInt(searchParams.get("page") || "1", 10);
  const pageSize = parseInt(searchParams.get("pageSize") || "10", 10);

  const token = request.headers.get("Authorization");
  let userId = token?.split(" ")[1];
  await connectDB();

  let query: { [key: string]: any } = {};

  if (category && category.length > 0) {
    query.category = { $in: category };
  }

  if (search && search.trim()) {
    const mappedCategory = CATEGORY_MAP_TO_ENG[search];
    query.$or = [
      { title: { $regex: search, $options: "i" } },
      { category: mappedCategory || { $regex: search, $options: "i" } },
    ];
  }

  try {
    const lectureListData = await Lecture.find(query)
      .skip((page - 1) * pageSize)
      .limit(pageSize);

    let lectureList: {
      id: string;
      online: boolean;
      category: string;
      platform: string;
      rating: number;
      title: string;
      instructor: string;
    }[] = [];

    if (lectureListData) {
      lectureList = await Promise.all(
        lectureListData.map(async (lecture) => {
          const isBookmarked = userId
            ? Boolean(await LectureBookmark.findOne({ lectureId: lecture._id, userId }))
            : false;

          return {
            id: lecture._id.toString(),
            online: lecture.online,
            category: lecture.category,
            platform: lecture.platform,
            rating: lecture.rating,
            title: lecture.title,
            instructor: lecture.instructor,
            isBookmarked: isBookmarked,
          };
        }),
      );
    }

    const totalLectureCount = await Lecture.countDocuments(query);
    const totalPages = Math.ceil(totalLectureCount / pageSize);
    const hasNextPage = totalPages > page;

    return Response.json({ lectureList, totalPages, currentPage: page, hasNextPage });
  } catch (error: any) {
    console.error("Error fetching lectures:", error);
    return new Response(JSON.stringify({ error: "강의 리스트를 불러오는데 실패하였습니다." }), {
      status: 500,
    });
  }
}
