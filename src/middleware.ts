import { NextRequest, NextResponse } from "next/server";
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
export async function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-pathname", request.nextUrl.pathname);
  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}
