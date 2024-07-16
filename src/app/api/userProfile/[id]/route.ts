import connectDB from "@/lib/database/db";
import { Matching } from "@/schema/matchingSchema";
import { User } from "@/schema/userSchema";

export async function GET(req: Request, { params }: { params: { id: string } }) {
  const userId = params.id;
  if (!userId) {
    return Response.json({ error: "id 가 필요합니다." }, { status: 400 });
  }
  connectDB();

  try {
    const user = await User.findById(userId);
    if (!user) {
      return Response.json({ message: "해당 회원이 존재하지 않습니다." }, { status: 404 });
    }

    const matchingData = await Matching.findById(userId);

    return new Response(JSON.stringify({ user, matching: matchingData }), { status: 200 });
  } catch (error: any) {
    if (error.name === "CastError") {
      return Response.json({ message: "회원이 존재하지 않습니다." }, { status: 404 });
    } else {
      return Response.json({ error }, { status: 500 });
    }
  }
}
