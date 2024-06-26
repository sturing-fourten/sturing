import { NextRequest, NextResponse } from "next/server";
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
export async function middleware(request: NextRequest) {
  return NextResponse.next();
}
