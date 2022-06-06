// React & Next
import React, { useState, useEffect} from "react";
import Image from "next/image";
// Images
import backTop from "../public/back-top.svg";
// Framer Motion
import { motion, AnimatePresence } from "framer-motion";

export const BackTop = () => {
  const handleScroll = () => {
    document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
  };

  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.pageYOffset);
    };

    window.addEventListener("scroll", updatePosition);

    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  return (
    <AnimatePresence>
      {scrollPosition > 100 && (
        <motion.span
          className="fixed bottom-4 right-4 rounded-full cursor-pointer z-20"
          onClick={handleScroll}
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1,
                    transition: { duration: 0.6 } }}
          exit={{ y: 100, opacity: 0,
                    transition: { duration: 0.6 } }}

          whileHover={{
            scale: 1.2,
            transition: { duration: 0.2 }
          }}

          whileTap={{ scale: 1 }}
        >
          <Image src={backTop} alt="Scroll to top" width={48} height={48} />
        </motion.span>
      )}
    </AnimatePresence>
  );
};
