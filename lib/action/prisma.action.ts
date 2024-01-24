"use server";

import { PrismaClient } from "@prisma/client";
import { unstable_noStore as noStore } from "next/cache";

const prisma = new PrismaClient();

export async function fetchPosts() {
  try {
    noStore();
    const data = await prisma.post.findMany();
    return data;
  } catch (error: any) {
    console.log(`Error: ${error.message}`);
  }
}
