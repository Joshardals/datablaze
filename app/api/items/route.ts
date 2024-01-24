import { NextResponse } from "next/server";

export async function GET(request: Request) {
  return NextResponse.json(
    {
      title: "Just testing this out!",
    },
    { status: 200 }
  );
}
