import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import { useRef } from "react";

export default function Partner() {
  const phrase =
    "We partner with up to 5 clients each year. his allows intense focus on the transformation nd launch of your brand by our very best team, nich is the only team we have. We specialize in orking with startups that are revolutionizing eir industries.";

  const words = phrase.split(" ");

  const descriptionRef = useRef(null);
  const isInView = useInView(descriptionRef, { once: false });

  const slideUp = {
    initial: { y: 100 },
    animate: (i) => ({
      y: 0,
      transition: {
        delay: 0.001 * i,
        duration: 0.7,
        ease: "easeOut",
      },
    }),
  };

  const expandWidth = {
    initial: { width: "0%" },
    animate: {
      width: "100%",
      transition: {
        duration: 1.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <div ref={descriptionRef} className="p-12 mt-8 min-h-[70vh]">
      <div className="overflow-hidden h-[2.5rem]">
        <motion.h1
          variants={slideUp}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          className="text-2xl"
        >
          Lorem ipsum dolor sit amet.
        </motion.h1>
      </div>
      <motion.hr
        className="my-2"
        variants={expandWidth}
        initial="initial"
        animate={isInView ? "animate" : "initial"}
      />
      <div className="w-full flex flex-wrap">
        {words.map((word, index) => (
          <div key={index} className="mr-2 mb-2 overflow-hidden">
            <motion.div
              className="text-[7vmin] font-light leading-tight"
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
    </div>
  );
}
