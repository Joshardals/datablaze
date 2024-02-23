"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function TryingGsap() {
  const container = useRef<HTMLDivElement | null>(null);

  // useGSAP(
  //   () => {
  //     gsap.registerPlugin(ScrollTrigger);

  //     gsap.to(".c", {
  //       scrollTrigger: {
  //         trigger: ".c",

  //         markers: true,
  //         scrub: true,
  //       },
  //       x: 400,
  //       rotate: 360,
  //       duration: 3,
  //     });
  //   },
  //   { scope: container }
  // );

  return (
    // <div className="bg-white w-full h-[80px] fixed top-0 header">Header</div>
    <div className="p-5 space-y-56 container" ref={container}>
      <div className="a p-10 bg-red-500 w-24 cursor-pointer">A</div>
      <div className="b p-10 bg-blue-500 w-24 cursor-pointer">B</div>
      <div className="c p-10 bg-orange-500 w-24 cursor-pointer">C</div>
    </div>
  );
}
