import React from "react";
import { motion } from "framer-motion";

function Rgb() {
  return (
    <div className="relative bg-transparent flex justify-center items-center overflow-hidden">
      <div className="w-[60%] mx-auto h-[60%] bg-transparent">
        <video
          src="https://www.rejouice.com/assets/videos/RJ-BALL-BLUE-ORANGE-scaled.webm"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="relative w-[60%] h-[60%]">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
            <h2 className="text-[5vmin] font-bold m-0">2 seats</h2>
            <p className="text-[5vmin] m-0">available for 2024</p>
          </div>
          <svg
            viewBox="0 0 100 100"
            className="absolute inset-0 w-full h-full -rotate-90"
          >
            <circle
              id="mainCircle"
              cx="50"
              cy="50"
              r="49"
              stroke="white"
              strokeWidth="0.25"
              fill="none"
              className="stroke-dasharray-[308] stroke-dashoffset-[77]"
            />
            <motion.circle cx="50" cy="1" r="0.75" fill="white" strokeWidth="0">
              <animateMotion dur="5s" repeatCount="indefinite" rotate="auto">
                <mpath href="#mainCircle" />
              </animateMotion>
            </motion.circle>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Rgb;
