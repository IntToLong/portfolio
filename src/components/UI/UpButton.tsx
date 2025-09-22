import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function UpButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function setVisible() {
      setIsVisible(window.scrollY > 200);
    }
    
    window.addEventListener("scroll", setVisible);

    return () => {
      window.removeEventListener("scroll", setVisible);
    };
  }, []);
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          key="up-button"
          className="bg-primary-white fixed right-3 bottom-28 z-30 h-20 w-20 cursor-pointer rounded-full mix-blend-exclusion"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ duration: 1 }}
          whileHover={{
            scale: 1.1,
            transition: { type: "spring", stiffness: 300, damping: 20 }
          }}
          whileTap={{
            y: 4,
            scale: 0.95,
            transition: { type: "spring", stiffness: 300, damping: 20 }
          }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <span className="text-primary-black font-bold">Up</span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
