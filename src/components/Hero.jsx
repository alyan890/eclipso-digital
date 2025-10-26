import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import assets from "../assets/assets";

const Hero = () => {
  const text = "Turning imagination into digital impact.".split(" ");
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax effect for background
  const yBg = useTransform(scrollYProgress, [0, 1], [0, 150]); // move background slower for depth

  return (
    <div
      ref={ref}
      id="hero"
      className="relative flex flex-col items-center gap-6 py-40 sm:py-56 px-4 sm:px-12 lg:px-40 text-center w-full overflow-hidden text-gray-700 bg-white dark:text-white dark:bg-gray-900"
    >
      {/* 🔹 Background Image with Parallax */}
      <motion.div
        style={{ y: yBg }}
        className="absolute inset-0 z-0"
      >
        <img
          src={assets.earth}
          alt="Hero background"
          className="w-full h-full object-cover opacity-30 dark:opacity-20"
        />
        {/* Optional gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white/70 dark:from-gray-900/80 dark:via-gray-900/50 dark:to-gray-900/80"></div>
      </motion.div>

      {/* 🔸 Trusted Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="inline-flex items-center gap-2 border border-gray-300 dark:border-gray-700 p-1.5 pr-4 rounded-full bg-white/70 dark:bg-gray-800/60 backdrop-blur-sm z-10"
      >
        <img className="w-20" src={assets.group_profile} alt="Group profile" />
        <p className="text-xs font-medium">Trusted by 10K+ people</p>
      </motion.div>

      {/* 🔸 Animated Heading */}
      <motion.h1
        className="text-4xl sm:text-5xl md:text-6xl xl:text-[84px] font-extrabold xl:leading-[95px] text-amber-300 max-w-5xl flex flex-wrap justify-center gap-3 z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.08,
              delayChildren: 0.5,
            },
          },
        }}
      >
        {text.map((word, i) => (
          <motion.span
            key={i}
            variants={{
              hidden: { opacity: 0, y: 60, scale: 1.1, rotateX: 30 },
              visible: {
                opacity: 1,
                y: 0,
                scale: 1,
                rotateX: 0,
                transition: {
                  duration: 0.6,
                  ease: [0.6, 0.01, 0.05, 0.95],
                },
              },
            }}
            className={
              word.toLowerCase() === "digital"
                ? "inline-block text-black dark:text-white transition-colors duration-300"
                : "inline-block"
            }
          >
            {word}
          </motion.span>
        ))}

        {/* ✨ Subtle floating animation after appearing */}
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [0, -5, 0] }}
          transition={{
            repeat: Infinity,
            duration: 4,
            ease: "easeInOut",
          }}
        />
      </motion.h1>

      {/* 🔸 Description */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-sm sm:text-lg font-medium text-gray-600 dark:text-white/75 max-w-2xl pb-3 z-10"
      >
        We don’t just build websites or apps — we create experiences that
        inspire, engage, and leave a lasting digital footprint.
      </motion.p>
    </div>
  );
};

export default Hero;
