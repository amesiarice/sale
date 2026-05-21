import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const cookieStore = await cookies();

    const session =
      cookieStore.get("user-session")?.value;

    if (!session) {
      return NextResponse.json(
        {
          success: false,
          message: "No session found",
        },
        { status: 401 }
      );
    }

    const user = JSON.parse(session);

    return NextResponse.json({
      success: true,
      user,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Invalid session",
      },
      { status: 500 }
    );
  }
}