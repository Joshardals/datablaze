import Link from "next/link";

export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen">
      <Link
        className=" bg-teal-500 text-black font-medium py-2 px-4 rounded-md"
        href="/dashboard"
      >
        Go to dashboard
      </Link>
    </main>
  );
}
