import { useEffect, useState } from "react";
import { motion } from "motion/react";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show custom cursor on devices with fine pointers
    if (!window.matchMedia("(pointer: fine)").matches) return;
    setIsVisible(true);

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === "button" ||
        target.tagName.toLowerCase() === "a" ||
        target.closest("button") ||
        target.closest("a") ||
        target.closest(".cursor-pointer")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-[#d8b979] rounded-full pointer-events-none z-[10000]"
        animate={{
          x: mousePosition.x - 3,
          y: mousePosition.y - 3,
          opacity: isHovering ? 0 : 1
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
      />
      
      {/* Expanding ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-[#d8b979] pointer-events-none z-[9999]"
        animate={{
          x: isHovering ? mousePosition.x - 24 : mousePosition.x - 12,
          y: isHovering ? mousePosition.y - 24 : mousePosition.y - 12,
          width: isHovering ? 48 : 24,
          height: isHovering ? 48 : 24,
          backgroundColor: isHovering ? "rgba(216, 185, 121, 0.1)" : "rgba(216, 185, 121, 0)",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 28, mass: 0.5 }}
      />
    </>
  );
}
