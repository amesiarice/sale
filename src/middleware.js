import { NextResponse } from "next/server";

export function middleware(request) {
  // Cookie check
  const isLoggedIn = request.cookies.get("user-session")?.value;

  const { pathname } = request.nextUrl;

  // Public routes
  const publicRoutes = ["/login", "/registration"];

  // Ignore Next.js internals, static files, and API routes
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  // Allow login and register pages without authentication
  if (publicRoutes.includes(pathname)) {
    return NextResponse.next();
  }

  // Redirect to login if no session cookie
  if (!isLoggedIn) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Allow access
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};