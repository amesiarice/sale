// Replace your Next.js API route with this version.
// Google Apps Script Web Apps often return a redirect.
// fetch() must follow redirects and read the response as text first.

import { NextResponse } from "next/server";

const APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbyjx2y4Jt29Yif0rcIVFa7exik8b9ErvJwVqOi4WJhxWBptphnmBYIeD-FZm9nUjQ-8Dw/exec";

export async function POST(req) {
  try {
    const body = await req.json();

    console.log("Order Body:", body);

    const response = await fetch(APPS_SCRIPT_URL, {
      method: "POST",
      redirect: "follow", // Important for Apps Script
      headers: {
        "Content-Type": "text/plain;charset=utf-8", // Best compatibility
      },
      body: JSON.stringify({
        sheetName: "Orders",
        data: body,
      }),
      cache: "no-store",
    });

    // Apps Script may not always return proper JSON headers,
    // so read as text first.
    const text = await response.text();
    console.log("Apps Script Response:", text);

    let result;
    try {
      result = JSON.parse(text);
    } catch {
      result = {
        success: false,
        message: "Invalid response from Google Apps Script",
        raw: text,
      };
    }

    return NextResponse.json(result);
  } catch (error) {
    console.error("Order API Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      { status: 500 }
    );
  }
}