"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Header() {
  const container = useRef<HTMLDivElement | null>(null);
  return (
    <div ref={container}>
      <div className="bg-white px-6 py-4">Moving Header On Scroll</div>
    </div>
  );
}
