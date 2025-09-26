import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import ArrowIcon from "../../assets/arrow.svg?react";
import { useCursorHover } from "../../hooks/useCursorHover";

export default function UpButton() {
  const [isBtnVisible, setIsBtnVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const { handleMouseEnter, handleMouseLeave } = useCursorHover();

  useEffect(() => {
    function setVisible() {
      setIsBtnVisible(window.scrollY > 200);
    }
    function handleResize() {
      setWindowSize(window.innerWidth);
    }

    window.addEventListener("scroll", setVisible);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", setVisible);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <AnimatePresence>
      {isBtnVisible && windowSize > 1024 && (
        <motion.button
          className="group bg-primary-white fixed right-3 bottom-28 z-30 h-20 w-20 cursor-pointer rounded-full mix-blend-exclusion lg:block"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          whileTap={{
            y: 4,
            scale: 0.95,
            transition: { type: "spring", stiffness: 300, damping: 20 }
          }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          onMouseEnter={() => handleMouseEnter(120)}
          onMouseLeave={() => handleMouseLeave(40)}
        >
          {" "}
          {!isHovered && (
            <motion.span
              className="text-primary-black block font-bold"
              initial={{ y: 0, opacity: 1 }}
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 1 }}
            >
              Up
            </motion.span>
          )}
          {isHovered && (
            <motion.span
              className="text-primary-black flex-center font-bold"
              animate={{ y: [0, 7, 0, -7, 0] }}
              transition={{ duration: 1.3, repeat: Infinity }}
            >
              <ArrowIcon className="h-12 w-12" />
            </motion.span>
          )}
        </motion.button>
      )}
    </AnimatePresence>
  );
}
