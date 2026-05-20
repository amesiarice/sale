// app/api/login/route.js
// Use this version if your login form sends:
// {
//   phone: "8814097213",
//   password: "1234"
// }

import { NextResponse } from "next/server";

const APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbxWneksrqPyXWdoJeL8VpA8EF1-6uZLxAexpxe4euGtBmnCek0WEZBWbcZo3kC5MbcuoA/exec";

export async function POST(req) {
  try {
    const { phone, password } = await req.json();

    // Validate input
    if (!phone || !password) {
      return NextResponse.json(
        {
          success: false,
          message: "Phone number and password are required",
        },
        { status: 400 }
      );
    }

    // Send login request to Google Apps Script
    const response = await fetch(APPS_SCRIPT_URL, {
      method: "POST",
      redirect: "follow",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify({
        action: "login",
        phone: String(phone).trim(),
        password: String(password).trim(),
      }),
      cache: "no-store",
    });

    const text = await response.text();
    console.log("Apps Script Response:", text);

    let result;
    try {
      result = JSON.parse(text);
    } catch {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid response from Google Apps Script",
          raw: text,
        },
        { status: 500 }
      );
    }

    // Invalid credentials
    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          message: result.message || "Invalid phone number or password",
        },
        { status: 401 }
      );
    }

    const user = result.user;

    // Create success response
    const res = NextResponse.json({
      success: true,
      message: "Login successful",
      user,
    });

    // Store retailer data in secure HTTP-only cookie
    res.cookies.set("user-session", JSON.stringify(user), {
      httpOnly: true,
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 days
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
    });

    return res;
  } catch (error) {
    console.error("Login API Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      { status: 500 }
    );
  }
}