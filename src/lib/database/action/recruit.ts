"use server";

import connectDB from "../db";

export async function recruitAction(formData: FormData) {
  const lectureId = formData.get("lectureId");
  const category = formData.get("category");
  const imageUrl = formData.get("imageUrl");
  const title = formData.get("title");
  const description = formData.get("introduction");
  const format = formData.get("progressWay");
  const platform = formData.get("online");
  const location = formData.get("address");
  const startDate = formData.get("startDate");
  const endDate = formData.get("endDate");
  const day = formData.get("day");
  const time = formData.get("time");
  const moodKeywords = formData.get("selectedMood");
  const task = formData.get("selectedAssignment");
  const career = formData.get("career");
  const count = formData.get("numberOfTeamMembers");
  const age = formData.get("ages");
  const role = formData.get("role");

  // formData.forEach((value, key) => {
  //   console.log(key, value);
  // });

  await connectDB();

  // const session = await getSession();
  const userId = "668bcc45f6265b4ece271a16";
  if (!userId) throw new Error("유저 정보가 없습니다.");

  const newStudy = {
    category: category,
    ownerId: userId,
    lectureId: lectureId,
    title: title,
    imageUrl: imageUrl,
    description: description,
    meeting: {
      format: format,
      platform: platform,
      location: location,
      schedule: {
        day: day,
        time: time,
      },
    },
    startDate: startDate,
    endDate: endDate,
    moodKeywords: moodKeywords,
    task: task,
    wantedMember: {
      career: career,
      count: count,
      age: age,
      role: role,
    },
    status: "RECRUIT_START",
    scrapCount: 0,
  };

  try {
    const response = await fetch(`${process.env.LOCAL_URL}/api/study`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newStudy),
    });

    if (!response.ok) {
      throw new Error("스터디 개설 실패");
    }
  } catch (error: any) {
    console.error("Error fetching study:", error.message);
    throw error;
  }
}