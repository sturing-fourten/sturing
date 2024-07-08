import { del, put } from "@vercel/blob";
import { NextResponse } from "next/server";

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
