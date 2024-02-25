"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

export default function Header() {
  const header = useRef<HTMLDivElement | null>(null);
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const showAnim = gsap
      .from(".header", {
        yPercent: -100,
        paused: true,
        duration: 0.2,
      })
      .progress(1);

    ScrollTrigger.create({
      start: "top top",
      end: "max",
      onUpdate: (self) => {
        self.direction === -1 ? showAnim.play() : showAnim.reverse();
      },
    });
  });
  return (
    <div>
      <div
        className=" bg-white text-black px-6 py-4 header fixed top-0 left-0 w-full flex items-center justify-center"
        ref={header}
      >
        <nav>
          <ul className="flex items-center justify-center space-x-14">
            <li className="active">
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="contact.html">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
