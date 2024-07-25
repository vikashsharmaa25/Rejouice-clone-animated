import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

function MouseCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-28 h-28 rounded-full bg-black opacity-60 pointer-events-none z-10 shadow-2xl duration-200"
      style={{
        x: mousePosition.x - 50,
        y: mousePosition.y - 50,
      }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 20,
        delay: 5,
      }}
    />
  );
}

export default MouseCursor;
