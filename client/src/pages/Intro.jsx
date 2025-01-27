import React from "react";
import { motion } from "framer-motion";

export default function Intro() {
  return (
    <div className="bg-gradient-to-br from-blue-100 via-white to-blue-200 min-h-screen flex items-center justify-center px-6">
      <motion.div
        className="bg-white shadow-2xl rounded-2xl p-8 md:p-12 max-w-4xl w-full text-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Heading Animation */}
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
        >
          Welcome to Task Manager
        </motion.h1>

        {/* Description Animation */}
        <motion.p
          className="text-gray-600 text-base md:text-lg mb-8"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
        >
          Organize your tasks, track your progress, and achieve your goals with
          ease. Our task manager helps you stay on top of your day-to-day
          activities.
        </motion.p>

        {/* Button Animation */}
        <motion.button
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium shadow-lg transition-transform transform hover:scale-105"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
        >
          Get Started
        </motion.button>
      </motion.div>
    </div>
  );
}
