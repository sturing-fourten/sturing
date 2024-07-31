"use server";

import { Matching } from "@/schema/matchingSchema";
import connectDB from "../db";
import { getSession } from "../getSession";
import { revalidatePath } from "next/cache";
import { TCategory, TStudyRecruitCardData } from "@/types/api/study";
import { User } from "@/schema/userSchema";

export const getHomeStudyList = async (): Promise<{
  success: boolean;
  data: {
    topSectionStudyList: TStudyRecruitCardData[];
    bottomSectionStudyList: TStudyRecruitCardData[];
    userInterestCategory: string;
    userLocation: string;
    userNickname: string;
  };
  error?: string;
}> => {
  const session = await getSession();
  const userId = session?.user?.id || "";
  let userNickname = "";
  if (userId) {
    userNickname = (await User.findById(userId)).nickname;
  }

  try {
    let matching = null;
    if (userId) {
      await connectDB();
      matching = await Matching.findOne({ userId });
    }
    let topSectionResponse: Response | null = null;
    let bottomSectionResponse: Response | null = null;
    let userInterestCategory = "";
    let userLocation = "";

    if (!userId || !matching) {
      topSectionResponse = await fetch(`${process.env.LOCAL_URL}/api/study/list?pageSize=5&sortBy=POPULAR`, {
        cache: "no-store",
      });

      if (!topSectionResponse.ok) {
        return {
          success: false,
          data: {
            topSectionStudyList: [],
            bottomSectionStudyList: [],
            userInterestCategory: "",
            userLocation: "",
            userNickname: "",
          },
          error: "popular study list fetch error",
        };
      }
      bottomSectionResponse = await fetch(`${process.env.LOCAL_URL}/api/study/list?pageSize=5&sortBy=LATEST`, {
        cache: "no-store",
      });
      if (!bottomSectionResponse.ok) {
        return {
          success: false,
          data: {
            topSectionStudyList: [],
            bottomSectionStudyList: [],
            userInterestCategory: "",
            userLocation: "",
            userNickname: "",
          },
          error: "latest study list fetch error",
        };
      }
    }

    if (userId && matching) {
      const repLevel = JSON.parse(matching?.levels || "[]")[0];
      const repLocation = JSON.parse(matching?.locations || "[]")[0];
      userInterestCategory = repLevel?.interest;
      userLocation = repLocation?.city && repLocation?.district && `${repLocation?.city} ${repLocation?.district}`;

      topSectionResponse = await fetch(
        `${process.env.LOCAL_URL}/api/study/list?pageSize=5&sortBy=POPULAR&category=${userInterestCategory}`,
        { cache: "no-store" },
      );

      if (!topSectionResponse.ok) {
        return {
          success: false,
          data: {
            topSectionStudyList: [],
            bottomSectionStudyList: [],
            userInterestCategory: "",
            userLocation: "",
            userNickname: "",
          },
          error: "category matching study list fetch error",
        };
      }
      bottomSectionResponse = await fetch(
        `${process.env.LOCAL_URL}/api/study/list?pageSize=5&sortBy=LATEST&location=${userLocation}`,

        { cache: "no-store" },
      );
      if (!bottomSectionResponse.ok) {
        return {
          success: false,
          data: {
            topSectionStudyList: [],
            bottomSectionStudyList: [],
            userInterestCategory: "",
            userLocation: "",
            userNickname: "",
          },
          error: "location matching study list fetch error",
        };
      }
    }

    const topSectionStudyListData = await topSectionResponse?.json();
    const bottomSectionStudyListData = await bottomSectionResponse?.json();
    const { studyList: topSectionStudyList } = topSectionStudyListData;
    const { studyList: bottomSectionStudyList } = bottomSectionStudyListData;

    revalidatePath("/");
    return {
      success: true,
      data: { topSectionStudyList, bottomSectionStudyList, userInterestCategory, userLocation, userNickname },
    };
  } catch (error) {
    return {
      success: false,
      data: {
        topSectionStudyList: [],
        bottomSectionStudyList: [],
        userInterestCategory: "",
        userLocation: "",
        userNickname: "",
      },
      error: "server error",
    };
  }
};
