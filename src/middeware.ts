// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  console.log("====>", request);

  const path = request.nextUrl.pathname;
  console.log("path", path);

  const isProtectedRoute =
    path.startsWith("/admin") ||
    path.startsWith("/employee") ||
    path.startsWith("/customer");

  if (!isProtectedRoute) return NextResponse.next();

  const cookie = request.cookies.get("user")?.value;
  if (!cookie) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  const user = JSON.parse(cookie);

  console.error(user, "============>");

  // Role-based access check
  if (path.startsWith("/admin") && user.role !== "admin") {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }
  if (path.startsWith("/employee") && user.role !== "employee") {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }
  if (path.startsWith("/customer") && user.role !== "customer") {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/employee/:path*", "/customer/:path*"],
};
