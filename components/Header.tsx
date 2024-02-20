// "use client";
// import { useRef } from "react";
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";

// export default function Header() {
//   const container = useRef<HTMLDivElement | null>(null);
//   const circle = useRef<HTMLDivElement | null>(null);

//   //   useGSAP(
//   //     (context) => {
//   //       let mm = gsap.matchMedia();

//   //       mm.add("(min-width: 800px)", () => {
//   //         gsap.to(".box", {
//   //           rotation: "+=360",
//   //           duration: 3,
//   //         });

//   //         gsap.to(circle.current, {
//   //           rotation: "+=360",
//   //         });

//   //         console.log(context);
//   //       });
//   //     },
//   //     { scope: container }
//   //   );

//   useGSAP(() => {
//     gsap.to("h1", {
//       x: 100,
//       scrollTrigger: {
//         trigger: "h1",
//         start: "top bottom",
//         end: "center center",
//         scrub: true,
//       },
//     });

//     gsap.to("h1", {
//       x: 200,
//       scrollTrigger: {
//         trigger: "h1",
//         start: "center center",
//         end: "bottom top",
//         scrub: true,
//       },
//     });
//   });
//   return (
//     // <div className="bg-white w-full h-[80px] fixed top-0 header">Header</div>
//     <>
//       <h2 className="text-4xl text-white mb-[100vh]">Scroll down</h2>
//       <h1 className="text-4xl text-white">This will jump</h1>
//     </>
//   );
// }
