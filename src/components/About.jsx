import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const phrase = `About us`;

  const lines = phrase.split("<br/>");

  const descriptionRef = useRef(null);
  const isInView = useInView(descriptionRef, { once: false });

  const slideUp = {
    initial: { y: 100, opacity: 0 },
    animate: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.001 * i,
        duration: 0.7,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className="p-8 mt-8 flex flex-col justify-center items-center h-[70vh] w-full">
      <div className="w-full  p-4">
        {lines.map((line, lineIndex) => (
          <div
            key={lineIndex}
            className="flex flex-wrap w-full justify-center"
            ref={descriptionRef}
          >
            {line.split(" ").map((word, index) => (
              <div key={index} className="mr-2 mb-2 overflow-hidden">
                <motion.div
                  className="text-[9vmin] font-sans leading-tight tracking-tight underline underline-offset-4"
                  variants={slideUp}
                  custom={index}
                  initial="initial"
                  animate={isInView ? "animate" : "initial"}
                >
                  {word}
                </motion.div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
