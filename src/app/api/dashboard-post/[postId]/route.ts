import connectDB from "@/lib/database/db";
import { DashboardComment } from "@/schema/dashboardCommentSchema";
import { DashboardPost } from "@/schema/dashboardPostSchema";
import { User } from "@/schema/userSchema";

export async function DELETE(request: Request, { params }: { params: { postId: string } }) {
  const postId = params.postId;
  if (!postId) {
    return Response.json({ error: "post id 가 필요합니다." }, { status: 400 });
  }

  const token = request.headers.get("Authorization");
  const userId = token?.split(" ")[1];
  if (!userId) {
    return Response.json({ error: "user id 가 필요합니다." }, { status: 400 });
  }
  await connectDB();
  try {
    const post = await DashboardPost.findById(postId);
    if (!post) {
      return Response.json({ message: "게시글이 존재하지 않습니다." }, { status: 404 });
    }

    const user = await User.findById(userId);
    if (!user) {
      return Response.json({ message: "해당 유저가 존재하지 않습니다." }, { status: 404 });
    }

    if (post.writerId.toString() !== userId) {
      return Response.json({ message: "권한이 없습니다." }, { status: 403 });
    }

    const commentListData = await DashboardComment.find({ postId });
    await Promise.all(commentListData.map(async (comment) => await DashboardComment.findByIdAndDelete(comment._id)));

    await DashboardPost.findByIdAndDelete(postId);

    return Response.json({ message: "해당 게시글이 삭제되었습니다." }, { status: 200 });
  } catch (error: any) {
    if (error.name === "CastError") {
      return Response.json({ message: "게시글이 존재하지 않습니다." }, { status: 404 });
    } else {
      return Response.json({ message: error.name }, { status: 500 });
    }
  }
}
