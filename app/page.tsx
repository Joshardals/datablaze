import Form from "@/components/Form";
import Title from "@/components/Title";
import TryingGsap from "@/components/TryingGsap";
import { fetchPosts } from "@/lib/action/prisma.action";
import Link from "next/link";

export default async function Home() {
  const posts = await fetchPosts();
  return (
    <main className="min-h-[300vh]">
      {/* <Link
        className=" bg-teal-500 text-black font-medium py-2 px-4 rounded-md"
        href="/dashboard"
      >
        Go to dashboard
      </Link>

      {posts?.map((post) => {
        const { id, title } = post;
        return <Title key={id} id={id} title={title} />;
      })}
      <Form /> */}

      <TryingGsap />
    </main>
  );
}
