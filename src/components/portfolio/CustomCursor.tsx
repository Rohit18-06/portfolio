import { useEffect, useState } from "react";

export function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hover, setHover] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    // Only enable on non-touch, fine-pointer devices
    if (typeof window === "undefined") return;
    if (!window.matchMedia("(pointer: fine)").matches) return;
    setEnabled(true);
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      setHover(!!t?.closest("a, button, [data-cursor='hover']"));
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, []);

  if (!enabled) return null;
  return (
    <>
      <div
        className="pointer-events-none fixed z-[100] rounded-full mix-blend-difference transition-[width,height] duration-200"
        style={{
          left: pos.x,
          top: pos.y,
          width: hover ? 48 : 12,
          height: hover ? 48 : 12,
          background: "white",
          transform: "translate(-50%, -50%)",
          opacity: 0.9,
        }}
      />
    </>
  );
}
