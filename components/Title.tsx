// "use client";

// import { deletePosts } from "@/lib/action/prisma.action";
// import { useRouter } from "next/navigation";

// interface props {
//   id: number;
//   title: string;
// }
// export const revalidate = 0;
// export default function Title({ id, title }: props) {
//   const router = useRouter();
//   const handleDelete = async () => {
//     try {
//       await deletePosts(id);
//       router.refresh();
//     } catch (error) {}
//   };
//   return (
//     <div className="text-gray-500 cursor-pointer" onClick={handleDelete}>
//       {title}
//     </div>
//   );
// }
