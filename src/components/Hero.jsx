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

  // Parallax: stronger translate and scale for more visible movement
  const yBg = useTransform(scrollYProgress, [0, 1], [0, 220]);
  const scaleBg = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  // Slightly more contrast on opacity so the bg fades a bit as you scroll
  const opacityBg = useTransform(scrollYProgress, [0, 1], [0.98, 0.68]);

  return (
    <div
      ref={ref}
      id="hero"
      className="relative flex flex-col items-center gap-6 py-40 sm:py-56 px-4 sm:px-12 lg:px-40 text-center w-full overflow-hidden bg-[#020014] text-white"
    >
      {/* 🌍 Earth Background with Parallax */}
      <motion.div
        style={{ y: yBg, scale: scaleBg, opacity: opacityBg, willChange: 'transform, opacity' }}
        className="absolute inset-0 z-0 overflow-hidden"
      >
        <img
          src={assets.earth}
          alt="Hero background"
          className="w-full h-full object-cover"
          style={{ opacity: 0.75, transformOrigin: 'center center', willChange: 'transform, opacity' }}
        />
        {/* Reduced dark overlay for better visibility; still provides contrast for text */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#020014]/60 via-[#030018]/45 to-[#05001c]/60 pointer-events-none"></div>
      </motion.div>

      {/* 🔸 Trusted Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="inline-flex items-center gap-2 border border-white/10 p-1.5 pr-4 rounded-full bg-white/5 backdrop-blur-md z-10"
      >
        <img className="w-20" src={assets.group_profile} alt="Group profile" />
        <p className="text-xs font-medium text-gray-300">Trusted by 10K+ people</p>
      </motion.div>

      {/* 🔸 Animated Heading */}
      <motion.h1
        className="text-4xl sm:text-5xl md:text-6xl xl:text-[84px] font-extrabold xl:leading-[95px] text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-orange-400 max-w-5xl flex flex-wrap justify-center gap-3 z-10"
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
            className="inline-block"
          >
            {word}
          </motion.span>
        ))}
      </motion.h1>

      {/* 🔸 Description */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-sm sm:text-lg font-medium text-gray-400 max-w-2xl pb-3 z-10"
      >
        At Eclipso, we turn creativity into code and imagination into impact — crafting digital experiences that shine beyond the ordinary.
      </motion.p>
    </div>
  );
};

export default React.memo(Hero);
