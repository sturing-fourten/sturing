import connectDB from "@/lib/database/db";
import { getSession } from "@/lib/database/getSession";
import { User } from "@/schema/userSchema";
import { del, put } from "@vercel/blob";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  await connectDB();

  const session = await getSession();
  const email = session?.user?.email;

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

export async function POST(request: Request): Promise<NextResponse> {
  const { searchParams } = new URL(request.url);
  const filename = searchParams.get("filename");

  if (filename && request.body) {
    const blob = await put(filename, request.body, {
      access: "public",
    });

    return NextResponse.json(blob);
  } else {
    return NextResponse.json({ error: "No filename or body" }, { status: 400 });
  }
}

export async function DELETE(request: Request): Promise<NextResponse> {
  const { url } = await request.json();
  await del(url);
  return NextResponse.json({});
}
