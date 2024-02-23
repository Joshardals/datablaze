// "use server";

// import { PrismaClient } from "@prisma/client";
// import { unstable_noStore as noStore } from "next/cache";

// const prisma = new PrismaClient();

// export async function fetchPosts() {
//   try {
//     noStore();
//     const data = await prisma.post.findMany();
//     return data;
//   } catch (error: any) {
//     console.log(`Error: ${error.message}`);
//   }
// }

// export async function createPosts(title: string) {
//   try {
//     noStore();
//     await prisma.post.create({
//       data: {
//         title: title,
//       },
//     });
//   } catch (error: any) {
//     console.log(`Error creating Posts: ${error.message}`);
//   }
// }

// export async function deletePosts(id: number) {
//   try {
//     noStore();
//     const data = await prisma.post.delete({
//       where: {
//         id,
//       },
//     });
//   } catch (error: any) {}
// }
