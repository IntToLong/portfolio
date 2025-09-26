import { useEffect } from "react";
import { motion, useMotionValue } from "motion/react";
import CursorContext from "../../contexts/CursorContext";
import { useContext } from "react";

export default function Cursor() {
  const { size, color } = useContext(CursorContext);
  const mouseX = useMotionValue(200);
  const mouseY = useMotionValue(200);

  useEffect(() => {
    function handleMouseMove(event: MouseEvent) {
      mouseX.set(event.clientX - size / 2);
      mouseY.set(event.clientY - size / 2);
    }

    if (window.innerWidth >= 1024) {
      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }
  }, [mouseX, mouseY, size]);

  return (
    <motion.div
      className={`fixed top-0 left-0 hidden lg:block bg-${color} pointer-events-none z-30 rounded-full mix-blend-exclusion`}
      style={{
        width: size,
        height: size,
        x: mouseX,
        y: mouseY
      }}
      initial={{ scale: 0.1, opacity: 0 }}
      animate={{ scale: 1, opacity: 1, width: size, height: size }}
      transition={{
        scale: { duration: 2, type: "spring" },
        opacity: { duration: 2, type: "spring" },
        width: { type: "spring", stiffness: 1000, damping: 100 },
        height: { type: "spring", stiffness: 1000, damping: 100 }
      }}
    />
  );
}
