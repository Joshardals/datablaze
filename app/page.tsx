"use client";
// import Form from "@/components/Form";
// import Title from "@/components/Title";
import TryingGsap from "@/components/TryingGsap";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
// import { fetchPosts } from "@/lib/action/prisma.action";
import Link from "next/link";

export default function Home() {
  // const posts = await fetchPosts();
  // useGSAP(() => {
  //   const tl = gsap.timeline({});
  //   tl.to(".red", { opacity: 100, display: "hidden" });
  //   tl.to(".red", { background: "#FFF", duration: 1 });
  //   tl.to(".red", { opacity: 0, duration: 1 });
  // });
  return (
    <main className="flex items-center justify-center min-h-screen">
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

      {/* <TryingGsap /> */}

      <h1 className="text-white uppercase text-4xl">Home Page</h1>
      <div
        className=" red fixed top-0 left-0  pointer-events-none
        w-full h-full
      "
      ></div>
    </main>
  );
}
