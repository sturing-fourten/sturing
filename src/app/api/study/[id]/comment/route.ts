import connectDB from "@/lib/database/db";
import { RecruitComment } from "@/schema/RecruitCommentSchema";
import { User } from "@/schema/userSchema";
import { NextResponse } from "next/server";

export async function GET(req: Request, { params }: { params: { id: string } }) {
  const studyId = params.id;
  if (!studyId) {
    return Response.json({ message: "스터디 id 가 필요합니다." }, { status: 400 });
  }
  await connectDB();

  try {
    const commentListData = await RecruitComment.find({ studyId });

    let commentList: {
      id: string;
      studyId: string;
      userId: string;
      nickname: string;
      profileImageUrl: string;
      content: string;
      createdAt: Date;
    }[] = [];

    if (commentListData) {
      commentList = await Promise.all(
        commentListData.map(async (comment: any) => {
          const user = await User.findById(comment.userId);
          return {
            id: comment.id,
            studyId: comment.studyId,
            userId: user.id,
            nickname: user.nickname,
            profileImageUrl: user.profileImageUrl,
            content: comment.content,
            createdAt: comment.createdAt,
          };
        }),
      );
    }

    return Response.json(commentList, { status: 200 });
  } catch (error: any) {
    if (error.name === "CastError") {
      return Response.json({ message: "해당 스터디가 존재하지 않습니다." }, { status: 404 });
    } else {
      return Response.json({ error }, { status: 500 });
    }
  }
}

export async function DELETE(req: Request): Promise<NextResponse> {
  const { id } = await req.json();
  await connectDB();
  const response = await RecruitComment.findByIdAndDelete(id);
  if (!response.ok) {
    return NextResponse.json({ message: "댓글을 찾을 수 없습니다." }, { status: 404 });
  }

  console.log("Deletion response:", response);
  return NextResponse.json({ message: "댓글이 성공적으로 삭제되었습니다." });
}
