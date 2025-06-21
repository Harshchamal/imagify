import React from 'react';
import { galleryData } from '../assets/assets';
import { motion } from 'framer-motion';

const Gallery = () => {
  return (
    <section className="pt-20 pb-20 px-4 sm:px-8 max-w-6xl mx-auto overflow-hidden">
      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Platform Gallery</h2>
        <p className="text-sm sm:text-base text-transparent bg-clip-text bg-gradient-to-r from-primaryGradientStart to-primaryGradientEnd mt-2">Your generated images in one place</p>
      </motion.div>
    

      {/* Uniform Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {galleryData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            viewport={{ once: true }}
            className="rounded-xl overflow-hidden  border border-gray-100 shadow-md hover:scale-[1.02] transition-transform"
          >
            <img
              src={item.imageUrl}
              alt={item.prompt}
              className="w-full h-[280px] object-cover"
            />
            <div className="p-4">
              <p className="text-sm text-white truncate">Prompt: {item.prompt}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
