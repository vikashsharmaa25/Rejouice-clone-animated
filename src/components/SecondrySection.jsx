import React, { useRef, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  AnimatePresence,
} from "framer-motion";
import { useLocomotiveScroll } from "react-locomotive-scroll";

function SecondarySection() {
  const sectionRef = useRef(null);
  const lineRef = useRef(null);
  const { scroll } = useLocomotiveScroll();
  const isInView = useInView(sectionRef, { amount: 0.1 });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const text =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate consequuntur voluptatibus cumque iusto maxime, quos unde totam fugiat dicta illum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, accusantium?";

  useEffect(() => {
    if (scroll) {
      scroll.on("scroll", () => {
        if (sectionRef.current) {
          const { top, height } = sectionRef.current.getBoundingClientRect();
          const progress =
            (window.innerHeight - top) / (window.innerHeight + height);
          scrollYProgress.set(progress);
        }
      });
    }
  }, [scroll, scrollYProgress]);

  return (
    <div className="py-10 max-w-[1500px] mx-auto p-8 mt-16" ref={sectionRef}>
      <div className="flex justify-between items-center">
        {isInView && (
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: -0 }}
            transition={{ delay: 0.3 }}
            className="text-lg"
          >
            Tomorrow's Brands, Today™
          </motion.h1>
        )}
        {isInView && (
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: -0 }}
            transition={{ delay: 0.3 }}
            className="text-lg"
          >
            Paris / San Diego
          </motion.h1>
        )}
      </div>
      <AnimatePresence mode="wait">
        {isInView && (
          <motion.div
            ref={lineRef}
            initial={{ width: "50%" }}
            animate={{ width: "100%" }}
            exit={{ width: "50%" }}
            transition={{ duration: 1, ease: "easeInOut" }}
            style={{
              height: 1,
              backgroundColor: "gray",
              margin: "1rem 0",
            }}
          />
        )}
      </AnimatePresence>
      <h1 className="text-[4vw]">
        {text.split("").map((char, index) => (
          <motion.span
            key={index}
            style={{
              color: useTransform(
                scrollYProgress,
                [0, index / text.length, 1],
                ["#e0e0e0", "#000000", "#000000"]
              ),
            }}
          >
            {char}
          </motion.span>
        ))}
      </h1>
    </div>
  );
}

export default SecondarySection;
