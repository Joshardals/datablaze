import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request: Request) {
  return NextResponse.json(
    {
      title: "Just testing this out!",
    },
    { status: 200 }
  );
}
