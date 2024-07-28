import connectDB from "@/lib/database/db";
import { DashboardComment } from "@/schema/dashboardCommentSchema";
import { DashboardPost } from "@/schema/dashboardPostSchema";
import { User } from "@/schema/userSchema";

export async function DELETE(request: Request, { params }: { params: { commentId: string } }) {
  const commentId = params.commentId;
  if (!commentId) {
    return Response.json({ error: "comment Id 가 필요합니다." }, { status: 400 });
  }

  const token = request.headers.get("Authorization");
  const userId = token?.split(" ")[1];

  if (!userId) {
    return Response.json({ error: "user id 가 필요합니다." }, { status: 400 });
  }
  await connectDB();
  try {
    const comment = await DashboardComment.findById(commentId);
    if (!comment) {
      return Response.json({ message: "댓글이 존재하지 않습니다." }, { status: 404 });
    }

    const user = await User.findById(userId);
    if (!user) {
      return Response.json({ message: "해당 유저가 존재하지 않습니다." }, { status: 404 });
    }

    if (comment.userId.toString() !== userId) {
      return Response.json({ message: "권한이 없습니다." }, { status: 403 });
    }
    await DashboardComment.findByIdAndDelete(commentId);

    return Response.json({ message: "해당 댓글이 삭제되었습니다." }, { status: 200 });
  } catch (error: any) {
    if (error.name === "CastError") {
      return Response.json({ message: "댓글이 존재하지 않습니다." }, { status: 404 });
    } else {
      return Response.json({ message: error.name }, { status: 500 });
    }
  }
}
