import React from 'react';
import { stepsData } from '../assets/assets';
import { motion } from 'framer-motion'; // Make sure this is framer-motion, not motion/react

const Steps = () => {
  return (
    <section className="pt-16 pb-20 px-4 sm:px-8 text-center overflow-hidden">

      {/* Section Heading with motion */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-white">How it works</h2>
        <p className="text-sm sm:text-base text-transparent bg-clip-text bg-gradient-to-r from-primaryGradientStart to-primaryGradientEnd mt-2">Transform Words Into Stunning Images</p>
      </motion.div>

      {/* Steps Grid with animation for each card */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
        {stepsData.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            viewport={{ once: true }}
            className=" p-6 rounded-3xl shadow-md border border-gray-100 flex flex-col 
            items-center text-center hover:shadow-lg transition duration-300"
          >
            {/* Icon */}
            <div className="rounded-xl p-4 mb-5">
              <img src={step.icon} alt={step.title} className="w-15 h-16" />
            </div>

            <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
            <p className="text-sm text-white/70">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Steps;
