// app/api/login/route.js

import { NextResponse } from "next/server";

const APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbxWneksrqPyXWdoJeL8VpA8EF1-6uZLxAexpxe4euGtBmnCek0WEZBWbcZo3kC5MbcuoA/exec";

export async function POST(req) {
  try {
    const { phone, password } = await req.json();

    if (!phone || !password) {
      return NextResponse.json(
        {
          success: false,
          message: "Phone and password required",
        },
        { status: 400 }
      );
    }

    // Timeout controller
    const controller = new AbortController();

    const timeout = setTimeout(() => {
      controller.abort();
    }, 15000);

    let response;

    try {
      response = await fetch(APPS_SCRIPT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify({
          action: "login",
          phone: String(phone).trim(),
          password: String(password).trim(),
        }),
        signal: controller.signal,
        cache: "no-store",
      });
    } finally {
      clearTimeout(timeout);
    }

    // Check response status
    if (!response.ok) {
      return NextResponse.json(
        {
          success: false,
          message: "Apps Script server error",
        },
        { status: 500 }
      );
    }

    // Get response safely
    const text = await response.text();

    if (!text) {
      return NextResponse.json(
        {
          success: false,
          message: "Empty response from server",
        },
        { status: 500 }
      );
    }

    let result;

    try {
      result = JSON.parse(text);
    } catch (err) {
      console.log("Invalid JSON:", text);

      return NextResponse.json(
        {
          success: false,
          message: "Invalid response from Apps Script",
        },
        { status: 500 }
      );
    }

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          message: result.message || "Invalid credentials",
        },
        { status: 401 }
      );
    }

    const res = NextResponse.json({
      success: true,
      user: result.user,
    });

    res.cookies.set("user-session", JSON.stringify(result.user), {
      httpOnly: true,
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
    });

    return res;
  } catch (error) {
    console.error("LOGIN ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message:
          error.name === "AbortError"
            ? "Server timeout"
            : "Login failed",
      },
      { status: 500 }
    );
  }
}