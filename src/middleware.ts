import { auth as middleware } from "@/auth";
import { NextResponse } from "next/server";

const onlyLoggedInRoute = ["/mystudy", "/mypage", "/edit-profile", "/matching", "/recruit", "/apply"];
const onlyLoggedOutRoute = ["/login"];
const onlyLoggedInRoutePattern = new RegExp(`^(${onlyLoggedInRoute.join("|")})`);
const onlyLoggedOutRoutePattern = new RegExp(`^(${onlyLoggedOutRoute.join("|")})`);

export default middleware((req) => {
  const { pathname } = req.nextUrl;
  const isOnlyLoggedInRoute = onlyLoggedInRoutePattern.test(pathname);
  const isOnlyLoggedOutRoute = onlyLoggedOutRoutePattern.test(pathname);
  if (!req.auth && isOnlyLoggedInRoute) {
    return Response.redirect(new URL("/login", req.nextUrl));
  } else if (req.auth && isOnlyLoggedOutRoute) {
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
