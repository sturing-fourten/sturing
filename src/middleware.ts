import { auth as middleware } from "@/auth";
import { NextResponse } from "next/server";

const onlyLoggedInRoute = ["/mystudy", "/mypage", "/edit-profile", "/matching", "/recruit"];
const routePattern = new RegExp(`^(${onlyLoggedInRoute.join("|")})`);

export default middleware((req) => {
  const { pathname } = req.nextUrl;
  const isOnlyLoggedInRoute = routePattern.test(pathname);
  if (!req.auth && isOnlyLoggedInRoute) {
    return Response.redirect(new URL("/", req.nextUrl));
  } else {
    const requestHeaders = new Headers(req.headers);
    requestHeaders.set("x-pathname", req.nextUrl.pathname);
    return NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });
  }
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
