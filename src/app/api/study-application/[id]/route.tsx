import connectDB from "@/lib/database/db";
import { Application } from "@/schema/applicationSchema";
import { User } from "@/schema/userSchema";

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const applicationId = params.id;
  connectDB();

  try {
    // 1. 지원서 조회
    const application = await Application.findById(applicationId);
    if (!application) {
      return new Response("Application not found", { status: 404 });
    }

    // 2. 지원서 유저 닉네임 추가
    const { userId } = application;

    const user = await User.findById(userId).select("nickname");
    if (!user) {
      return new Response("User not found", { status: 404 });
    }

    const userNickname = user.nickname;

    const updatedApplication = await Application.findOneAndUpdate(
      { _id: applicationId },
      { $set: { userNickname: userNickname } },
      { new: true },
    );

    return new Response(
      JSON.stringify({
        updatedApplication,
      }),
      { status: 200 },
    );
  } catch (error: any) {
    return new Response(error.message, { status: 500 });
  }
}
