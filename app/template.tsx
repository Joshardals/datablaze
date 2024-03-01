"use client";
import { animatePageIn } from "@/animations";
import { useEffect, useRef } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  const transition = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    // animatePageIn();
    transition.current?.classList.add("fadeOut");
    // setTimeout(() => {
    //   transition.current?.classList.add("fadeOut");
    // });
  }, [transition]);
  return (
    <div>
      {/* <div
        id="transition-element"
        className="w-screen h-screen bg-black z-100 fixed top-0 left-0"
      ></div> */}
      <div
        id="transition-element2"
        ref={transition}
        className="w-screen h-screen bg-white pointer-events-none z-100 fixed top-0 left-0"
      ></div>

      {children}
      {/* <div
        ref={transition}
        className="fixed top-10 left-10 bg-black text-white px-4 py-6"
      >
        Hello World!
      </div> */}
    </div>
  );
}
