import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-700 via-purple-600 to-pink-500 text-white py-24">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl sm:text-6xl font-extrabold leading-tight"
        >
          Unlock Your Freelance Future
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-6 text-xl sm:text-2xl text-white/90 max-w-xl"
        >
          Discover top projects and build your career with freedom.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10"
        >
          <button className="bg-white text-indigo-700 px-6 py-3 text-lg font-semibold rounded-full shadow-md hover:bg-indigo-100 transition">
            Get Started
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
