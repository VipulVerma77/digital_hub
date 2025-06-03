import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";

import { slide1, slide2, slide3 } from "@/assets";

const images = [slide1, slide2, slide3];

const ImageSlider: React.FC = () => {
  return (
    <motion.div
      className="w-full h-[250px] sm:h-[350px] md:h-[500px] lg:h-[550px] rounded-xl shadow overflow-hidden px-10 py-5"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 2500 }}
        loop={true}
        pagination={{ clickable: true }}
        className="w-full h-full"
      >
        {images.map((img, idx) => (
          <SwiperSlide key={idx}>
            <img
              src={img}
              alt={`Slide ${idx + 1}`}
              className="w-full h-full object-fit"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
};

export default ImageSlider;
