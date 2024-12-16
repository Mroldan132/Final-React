import { NextResponse } from "next/server";

export function middleware(req) {
  const token = req.cookies.get("token");
  
  const { pathname } = req.nextUrl;

  if (!token && pathname !== "/login") {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  if (!token && pathname.startsWith("/menu")) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/menu/:path*", "/login", ],
};
