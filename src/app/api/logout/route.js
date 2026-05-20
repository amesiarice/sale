import { NextResponse } from "next/server";

export async function POST() {
  const response = NextResponse.json({
    success: true,
  });

  // Remove session cookie
  response.cookies.set("user-session", "", {
    path: "/",
    maxAge: 0,
  });

  return response;
}