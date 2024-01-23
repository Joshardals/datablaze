"use client";

import { useRef } from "react";

export default function Home() {
  const ref = useRef("I am pointing!");
  return (
    <main className="flex items-center justify-center min-h-screen">
      <div className="element">
        <p>Hello World!</p>
        <p>{ref.current}</p>
      </div>
    </main>
  );
}
