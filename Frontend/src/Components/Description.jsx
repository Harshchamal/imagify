import React from 'react';
import { assets } from '../assets/assets';
import { motion } from 'motion/react';


const Description = () => {
  return (
    <section className="pt-20 pb-20 px-4 sm:px-8 max-w-5xl mx-auto overflow-hidden">
      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Create AI Images</h2>
        <p className="text-sm sm:text-base text-white/70 mt-2">
          Turn your imagination into visuals
        </p>
      </motion.div>

      {/* Content Layout */}
      <div className="flex flex-col lg:flex-row items-center gap-10">
        {/* Left: Text Block */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="flex-1 text-left"
        >
          <h3 className="text-lg sm:text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primaryGradientStart to-primaryGradientEnd mb-4">
            Introducing the AI-Powered Text to Image Generator
          </h3>
          <p className="text-white/70 text-sm sm:text-base leading-relaxed">
            Easily bring your ideas to life with our free AI image generator. Whether you need stunning visuals
            or unique imagery, our tool transforms your text into eye-catching images with just a few clicks.
            Imagine it, describe it, and watch it come to life instantly.
          </p>
          <p className="text-white/70 text-sm sm:text-base mt-4 leading-relaxed">
            Simply type in a text prompt, and our cutting-edge AI will generate high-quality images in seconds.
            From product visuals to character designs and portraits, even concepts that don’t yet exist can be
            visualized effortlessly. Powered by advanced AI technology, the creative possibilities are limitless!
          </p>
        </motion.div>

        {/* Right: Image */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <img
            src={assets.Car}
            alt="AI Generated"
            className="rounded-xl shadow-lg w-full max-w-md mx-auto"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Description;
