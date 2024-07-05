import connectDB from "@/lib/database/db";
import { getSession } from "@/lib/database/getSession";
import { User } from "@/schema/userSchema";

export async function GET(request: Request) {
  await connectDB();

  const session = await getSession();
  const email = session?.user?.email;
  console.log("User ID:", email);

  if (!email) {
    return new Response(JSON.stringify({ error: "인증되지 않은 사용자" }), { status: 401 });
  }

  try {
    const user = await User.findOne({ email: email });

    if (!user) {
      return new Response(JSON.stringify({ error: "사용자를 찾을 수 없습니다." }), { status: 404 });
    }

    return new Response(JSON.stringify(user), { status: 200 });
  } catch (error) {
    console.error("사용자 조회 중 오류:", error);
    return new Response(JSON.stringify({ error: "내부 서버 오류" }), { status: 500 });
  }
}
