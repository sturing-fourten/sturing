import connectDB from "@/lib/database/db";
import { Study } from "@/schema/studySchema";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category")?.split(",");
  const search = searchParams.get("search");
  const sortBy = searchParams.get("sortBy") || "LATEST";
  const role = searchParams.get("role")?.split(",");
  const age = searchParams.get("age")?.split(",");
  const career = searchParams.get("career")?.split(",");
  const memberCount = searchParams.get("memberCount");
  //지역검색 추가 예정

  connectDB();

  const categoryMap: { [key: string]: string } = {
    디자인: "DESIGN",
    개발: "DEVELOP",
    비즈니스: "BUSINESS",
    마케팅: "MARKETING",
    경제: "ECONOMY",
    언어: "LANGUAGE",
    자격증: "LICENSE",
    자기개발: "SELF-DEVELOPMENT",
  };

  //쿼리 설정
  let query: { [key: string]: any } = {};

  if (category) {
    query.category = { $in: category };
  }

  if (search) {
    const mappedCategory = categoryMap[search];
    query.$or = [
      { title: { $regex: search, $options: "i" } },
      { category: mappedCategory || { $regex: search, $options: "i" } },
    ];
  }

  if (role) {
    query["wantedMember.role"] = { $in: role };
  }

  if (age) {
    query["wantedMember.age"] = { $in: age };
  }

  if (career) {
    query["wantedMember.career"] = { $in: career };
  }

  if (memberCount) {
    query["wantedMember.count"] = { $in: memberCount };
  }

  //정렬 설정
  let sortOption: { [key: string]: any } = {};

  if (sortBy === "LATEST") {
    sortOption = { createdAt: -1 };
  } else if (sortBy === "DEADLINE") {
    sortOption = { startDate: 1 };
  } else if (sortBy === "POPULAR") {
    sortOption = { popularScore: -1 };
  }

  try {
    let studyList;
    if (sortBy === "POPULAR") {
      studyList = await Study.aggregate([
        { $match: query },
        {
          $lookup: {
            from: "teammembers",
            localField: "_id",
            foreignField: "studyId",
            as: "teamMembersData",
          },
        },
        {
          $lookup: {
            from: "recruitcomments",
            localField: "_id",
            foreignField: "studyId",
            as: "commentsData",
          },
        },
        {
          $addFields: {
            teamMembersCount: { $size: { $ifNull: ["$teamMembersData.members", []] } },
            commentsCount: { $size: { $ifNull: ["$commentsData", []] } },
            scrapCount: { $ifNull: ["$scrapCount", 0] },
          },
        },
        {
          $addFields: {
            popularScore: { $add: ["$scrapCount", "$teamMembersCount", "$commentsCount"] },
          },
        },
        { $sort: sortOption },
        {
          $project: {
            teamMembersData: 0,
            commentsData: 0,
            teamMembersCount: 0,
            commentsCount: 0,
            popularScore: 0,
          },
        },
      ]);
    } else {
      studyList = await Study.find(query).sort(sortOption);
    }

    return Response.json(studyList);
  } catch (error: any) {
    return Response.json({ error }, { status: 500 });
  }
}
