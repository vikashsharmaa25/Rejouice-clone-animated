import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { motion, useInView } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import CarOne from "../assets/CarOne.jpg";
import CarTwo from "../assets/CarTwo.jpg";
import Person from "../assets/Person.jpg";
import Think from "../assets/think.jpg";
import Thumb from "../assets/thumb.png";

export default function GetInTouch() {
  const getInTouchRef = useRef(null);
  const isInView = useInView(getInTouchRef, { once: false });
  const images = [
    { src: CarOne, alt: "Car One" },
    { src: CarTwo, alt: "Car Two" },
    { src: Person, alt: "Person" },
    { src: Think, alt: "Think" },
    { src: Thumb, alt: "Thumb" },
  ];

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
    <>
      <div ref={getInTouchRef}>
        <div className="max-w-[1500px] mx-auto px-4">
          <h1 className="text-[7vw] ">Get in touch.</h1>
          <motion.hr
            className="mb-2 -mt-5"
            variants={expandWidth}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
          />
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            "@0.00": {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            "@0.75": {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            "@1.00": {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            "@1.50": {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="w-full h-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
