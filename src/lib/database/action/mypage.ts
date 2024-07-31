"use server";

import { getSession } from "../getSession";

export const getMyProfileInfo = async () => {
  try {
    const session = await getSession();
    const id = session?.user?.id;
    if (!id) {
      return console.error("로그인 하지 않은 유저입니다.");
    }
    const data = await (await fetch(`${process.env.LOCAL_URL}/api/userProfile/${id}`)).json();

    return data;
  } catch (error) {
    console.error("Error fetching profile", error);
    return null;
  }
};

export const getMyStudyCount = async () => {
  try {
    const session = await getSession();
    const id = session?.user?.id;
    if (!id) {
      return console.error("로그인 하지 않은 유저입니다.");
    }
    const data = await (await fetch(`${process.env.LOCAL_URL}/api/my-study/list/count?userId=${id}`)).json();

    return data;
  } catch (error) {
    console.error("Error fetching profile", error);
    return null;
  }
};
