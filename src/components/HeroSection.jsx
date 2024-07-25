import React from "react";
import BG from "../assets/bg.mp4";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import MouseCursor from "./MouseCursore";

function HeroSection() {
  const heading = ["r", "e", "j", "o", "u", "i", "c", "e"];

  // Animation configuration for the heading
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Adjust the stagger delay for smoothness
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring", // Use spring animation for smoothness
        stiffness: 100, // Adjust stiffness for a more elastic effect
        damping: 10, // Controls the bounce effect
        mass: 0.5, // Mass affects the bounce and speed
      },
    },
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <MouseCursor />
      {/* Navbar */}
      <div className="absolute top-0 z-20 w-full">
        <Navbar />
      </div>

      {/* Background Video */}
      <video
        src={BG}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-1/2 left-1/2 w-full h-full object-cover transform -translate-x-1/2 -translate-y-1/2"
      />

      {/* Animated Heading */}
      <motion.div
        className="flex absolute lg:-bottom-20 bottom-0 w-full justify-center items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {heading.map((ele, index) => (
          <motion.div
            key={index}
            variants={letterVariants}
            className="flex justify-center items-center"
          >
            <h1 className="text-[10vw] sm:text-[15vw] md:text-[20vw] lg:text-[27vw] text-white z-20">
              {ele}
            </h1>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default HeroSection;
