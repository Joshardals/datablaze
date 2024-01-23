"use client";

import { useRef } from "react";

export default function Home() {
  const ref = useRef(0);
  const handleClick = () => {
    ref.current = ref.current + 1;
    alert(`You clicked the button ${ref.current} times`);
  };
  return (
    <main className="flex items-center justify-center min-h-screen">
      <div className="element">
        <p>Hello World!</p>
      </div>
      <button onClick={handleClick} className="bg-red-500 px-4 py-1">
        Click Me!
      </button>
    </main>
  );
}
