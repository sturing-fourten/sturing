import connectDB from "@/lib/database/db";
import { Study } from "@/schema/studySchema";
import { TeamMembers } from "@/schema/teamMemberSchema";
import { TStudyListData } from "@/types/api/study";
import { CATEGORY_MAP_TO_ENG } from "@/utils/categoryMap";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category")?.split(",").filter(Boolean);
  const search = searchParams.get("search");
  const sortBy = searchParams.get("sortBy") || "LATEST";
  const role = searchParams.get("role")?.split(",").filter(Boolean);
  const age = searchParams.get("age")?.split(",").filter(Boolean);
  const level = searchParams.get("level")?.split(",").filter(Boolean);
  const memberCount = searchParams.get("memberCount");
  const location = searchParams.get("location")?.split(",").filter(Boolean);
  const page = parseInt(searchParams.get("page") || "1", 10);
  const pageSize = parseInt(searchParams.get("pageSize") || "10", 10);
  //헤더로 유저정보 받기 (북마크 여부 확인)

  await connectDB();

  //쿼리 설정
  let query: { [key: string]: any } = { status: "RECRUIT_START" };

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

  if (role && role.length > 0) {
    query["wantedMember.role"] = { $in: role };
  }

  if (age && age.length > 0) {
    query["wantedMember.age"] = { $in: age };
  }

  if (level && level.length > 0) {
    query["wantedMember.career"] = { $in: level };
  }

  if (memberCount && Number(memberCount) > 1) {
    query["wantedMember.count"] = memberCount;
  }

  if (location && location.length > 0) {
    query["$or"] = location.map((loc) => ({
      "meeting.location": { $regex: `^${loc}$`, $options: "i" },
    }));
  }
  //정렬 설정
  let sortOption: { [key: string]: any } = {};

  if (sortBy === "LATEST") {
    sortOption = { createdAt: -1 };
  } else if (sortBy === "DEADLINE") {
    sortOption = { startDate: 1, createdAt: 1 };
  } else if (sortBy === "POPULAR") {
    sortOption = { popularScore: -1, createdAt: 1 };
  }
  console.log("query", query);
  try {
    let studyListData;

    if (sortBy === "POPULAR") {
      studyListData = await Study.aggregate([
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

        {
          $lookup: {
            from: "users",
            localField: "ownerId",
            foreignField: "_id",
            as: "ownerData",
          },
        },
        {
          $match: {
            ownerData: { $ne: [] },
          },
        },
        { $sort: sortOption },
        { $skip: (page - 1) * pageSize },
        { $limit: pageSize },
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
      studyListData = await Study.aggregate([
        { $match: query },
        {
          $lookup: {
            from: "users",
            localField: "ownerId",
            foreignField: "_id",
            as: "ownerData",
          },
        },
        {
          $match: {
            ownerData: { $ne: [] },
          },
        },
        { $sort: sortOption },
        { $skip: (page - 1) * pageSize },
        { $limit: pageSize },
      ]);
    }

    let studyList: TStudyListData = [];

    //isBookmark 추가 예정.
    if (studyListData) {
      studyList = await Promise.all(
        studyListData.map(async (study) => {
          const { _id, ownerId, category, title, imageUrl, startDate, endDate, meeting, wantedMember } = study;
          const teamMembers = await TeamMembers.findOne({ studyId: _id });
          const acceptedTeamMembers = teamMembers.members.filter((member: any) => member.status === "ACCEPTED");

          const acceptedCount = acceptedTeamMembers ? acceptedTeamMembers.length : 0;
          const wantedMemberCount = wantedMember?.count || "제한없음";
          return {
            id: _id.toString(),
            ownerId,
            category,
            title,
            imageUrl,
            startDate,
            endDate,
            meeting,
            wantedMemberCount,
            acceptedTeamMemberCount: acceptedCount,
          };
        }),
      );
    }

    const totalStudies = (await Study.find(query).populate({ path: "ownerId" }).exec()).filter(
      (study) => study.ownerId !== null,
    );
    const totalStudiesCount = totalStudies.length;

    const totalPages = Math.ceil(totalStudiesCount / pageSize);
    const hasNextPage = totalPages > page;

    return Response.json({ studyList, totalPages, currentPage: page, pageSize, hasNextPage });
  } catch (error: any) {
    console.error("error study list", error);
    return Response.json({ error }, { status: 500 });
  }
}
