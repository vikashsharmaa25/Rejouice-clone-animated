import React, { useState } from "react";
import { motion } from "framer-motion";
import CarOne from "../assets/CarOne.jpg";
import CarTwo from "../assets/CarTwo.jpg";
import Persone from "../assets/Person.jpg";
import VideoOne from "../assets/test.mp4";
import VideoTwo from "../assets/bg.mp4";

function Card() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const cardData = [
    { image: CarOne, video: VideoOne },
    { image: CarTwo, video: VideoTwo },
    { image: Persone, video: VideoOne },
  ];

  return (
    <div className="max-w-[1500px] mx-auto p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-xl">Transforming visions into brands.</h1>
        <h1 className="text-xl">See the work</h1>
      </div>

      <div className="flex lg:flex-row flex-col justify-between gap-2">
        {cardData.map((card, index) => (
          <motion.div
            key={index}
            className="lg:w-[33%] w-full h-[650px] relative overflow-hidden cursor-pointer"
            onHoverStart={() => setHoveredCard(index)}
            onHoverEnd={() => setHoveredCard(null)}
          >
            <motion.img
              src={card.image}
              alt=""
              className="w-full h-full object-cover absolute top-0 left-0"
              initial={{ opacity: 1 }}
              animate={{ opacity: hoveredCard === index ? 0 : 1 }}
              transition={{ duration: 0.3 }}
            />
            <motion.video
              src={card.video}
              className="w-full h-full object-cover absolute top-0 left-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: hoveredCard === index ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              autoPlay
              loop
              muted
              playsInline
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Card;
