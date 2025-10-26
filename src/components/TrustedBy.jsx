import React from "react";
import { motion } from "framer-motion";
import { company_logos } from "../assets/assets";

const TechStack = () => {
  return (
    <section
      id="tech"
      className="relative flex flex-col items-center justify-center text-center py-24 px-6 sm:px-12 lg:px-32 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-100/40 to-transparent dark:via-gray-800/30"></div>

      {/* Heading */}
      <div className="relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-extrabold mb-6"
        >
          Technologies We Use
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          viewport={{ once: true }}
          className="text-gray-500 dark:text-gray-300 max-w-2xl mx-auto text-sm sm:text-base mb-10"
        >
          Our projects are powered by the latest and most reliable technologies.
        </motion.p>
      </div>

      {/* 🔁 Marquee Row */}
      <div className="relative w-full overflow-hidden py-6">
        {/* Motion track */}
        <motion.div
          className="flex gap-16 sm:gap-24"
          animate={{
            x: ["0%", "-100%"],
          }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}
        >
          {[...company_logos, ...company_logos].map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`tech-${index}`}
              className="h-20 sm:h-18 object-contain opacity-80 hover:opacity-100 transition-all"
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
