import React from "react";
import { motion } from "framer-motion";

interface AboutUsProps {
  title: string;
  description: string;
  imageSrc: string;
}

const AboutUs: React.FC<AboutUsProps> = ({ title, description, imageSrc }) => {
  return (
    <div id="about"  className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-48 px-8 py-8 md:py-4 md:px-26 md:py-5 mb-0">
      {/* Text Section */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex-1"
      >
        <h2 className="text-5xl font-[600] text-gray-700 mb-4">{title}</h2>
        <p className="text-base text-gray-600 leading-relaxed text-justify">{description}</p>
      </motion.div>

      {/* Image Section */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex-1 flex justify-end"
      >
        <motion.img
          src={imageSrc}
          alt="About Us"
          className="w-full max-w-md object-fit"
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </div>
  );
};

export default AboutUs;
