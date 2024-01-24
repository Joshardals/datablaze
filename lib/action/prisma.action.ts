"use server";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function fetchPosts() {
  try {
    const data = await prisma.post.findMany();
    return data;
  } catch (error: any) {
    console.log(`Error: ${error.message}`);
  }
}
