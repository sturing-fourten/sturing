"use server";

import { DashboardPost } from "@/schema/dashboardPostSchema";
import connectDB from "../db";
import { getSession } from "../getSession";
import { User } from "@/schema/userSchema";
import { TeamMembers } from "@/schema/teamMemberSchema";

export const postBoardAction = async (formData: FormData) => {
  try {
    const session = await getSession();
    const userId = session?.user?.id;
    const studyId = formData.get("studyId");
    const title = formData.get("title");
    const content = formData.get("content");
    const isImportant = formData.get("isImportant") === "true";
    const postType = formData.get("postType");
    const imageUrl = formData.get("imageUrl");

    if (!userId || !studyId || !postType || !title || !content) {
      return { status: 400, message: "필수 정보가 누락되었습니다." };
    }

    const newBoard = {
      studyId,
      title,
      content,
      postType,
      imageUrl,
      isImportant,
    };

    const response = await fetch(`${process.env.LOCAL_URL}/api/dashboard-post`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + userId,
      },
      body: JSON.stringify(newBoard),
    });

    if (!response.ok) {
      return { status: 400, message: "게시글 작성을 실패하였습니다." };
    }

    const data = await response.json();
    return { status: 200, data };
  } catch (error: any) {
    return { success: false, message: error.message };
  }
};

export const getBoardAction = async (postId: string) => {
  connectDB();

  try {
    const board = await DashboardPost.findOne({ _id: postId });

    const { studyId, writerId } = board;
    const user = await User.findById(writerId);

    const teamMembers = await TeamMembers.findOne({ studyId });

    const writerInTeamMember = teamMembers.members.find((member: any) => {
      return member.userId.toString() === writerId.toString();
    });

    const comments = await fetch(`${process.env.LOCAL_URL}/api/dashboard-post/${postId}/comment`);
    if (!comments.ok) {
      return { status: 400, message: "게시글 작성을 실패하였습니다." };
    }
    const comment = await comments.json();

    const updatedBoard = {
      _id: board._id.toString(),
      writer: {
        writerId: user._id.toString(),
        role: writerInTeamMember.role,
        nickname: user.nickname,
        profileImageUrl: user.profileImageUrl,
      },
      title: board.title,
      content: board.content,
      imageUrl: board.imageUrl,
      comment: comment,
      postType: board.postType,
      createdAt: board.createdAt,
      commentCount: board.commentCount,
    };

    return { updatedBoard };
  } catch (error: any) {
    return { success: false, message: error.message };
  }
};
