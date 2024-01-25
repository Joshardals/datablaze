"use client";

import { createPosts } from "@/lib/action/prisma.action";
import { revalidatePath } from "next/cache";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const revalidate = 0;

export default function Form() {
  const [title, setTitle] = useState("");
  const router = useRouter();
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await createPosts(title);
      router.refresh();
    } catch (error: any) {
      console.log(error.message);
    }
  };
  return (
    <form className="space-x-2" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button className="bg-teal-500">Add Title</button>
    </form>
  );
}
