"use server";

import { getSession } from "../getSession";

export const getMyProfileInfo = async () => {
  try {
    const session = await getSession();
    const id = session?.user?.id;
    const res = await fetch(`${process.env.LOCAL_URL}/api/userProfile`, {
      headers: {
        Authorization: "Bearer " + id,
      },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching profile", error);
  }
};

export const getMyStudyCount = async () => {
  try {
    const session = await getSession();
    const id = session?.user?.id;

    const res = await fetch(`${process.env.LOCAL_URL}/api/my-study/list/count`, {
      headers: {
        Authorization: "Bearer " + id,
      },
    });

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching profile", error);
  }
};
