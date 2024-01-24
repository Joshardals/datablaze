import { fetchPosts } from "@/lib/action/prisma.action";
import Link from "next/link";

export default async function Home() {
  const posts = await fetchPosts();
  console.log(posts);
  return (
    <main className="flex flex-col space-y-2 items-center justify-center min-h-screen">
      <Link
        className=" bg-teal-500 text-black font-medium py-2 px-4 rounded-md"
        href="/dashboard"
      >
        Go to dashboard
      </Link>

      {posts?.map((post) => {
        const { id, title } = post;
        return (
          <p key={id} className=" text-gray-500">
            {title}
          </p>
        );
      })}
    </main>
  );
}
