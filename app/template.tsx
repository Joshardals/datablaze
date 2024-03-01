"use client";
import { animatePageIn } from "@/animations";
import { useEffect } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    animatePageIn();
  }, []);
  return (
    <div>
      {/* <div
        id="transition-element"
        className="w-screen h-screen bg-black z-100 fixed top-0 left-0"
      ></div> */}
      <div
        id="transition-element2"
        className="w-screen h-screen bg-white z-100 fixed top-0 left-0"
      ></div>
      {children}
    </div>
  );
}
