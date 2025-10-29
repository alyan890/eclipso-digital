import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import assets from "../assets/assets";
import Title from "./Title";

const Services = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth < 768);
    }
  }, []);

  const services = [
    {
      title: "Web Development",
      desc: "Fast, responsive and scalable websites built to make your business stand out online.",
      icon: assets.laptop,
    },
    {
      title: "App Development",
      desc: "Modern mobile apps designed for performance and seamless user experience.",
      icon: assets.mobapp,
    },
    {
      title: "Graphic Design",
      desc: "Creative visuals and branding that capture your story beautifully.",
      icon: assets.graphic,
    },
    {
      title: "Video Editing",
      desc: "Clean, cinematic edits that bring your brand’s vision to life.",
      icon: assets.video,
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: isMobile ? 0 : i * 0.15,
        duration: isMobile ? 0.3 : 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section
      id="services"
      className="relative overflow-hidden py-24 px-6 sm:px-12 lg:px-24 bg-[#04010e] text-white"
    >
      {/* 🌍 Soft Earth Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0220] via-[#060015] to-black opacity-90"></div>

      {/* 🔵 Smooth glowing circle */}
      {!isMobile && (
        <motion.div
          className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-r from-indigo-800/20 via-blue-700/10 to-purple-700/20 rounded-full blur-xl"
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      )}

      {/* ✨ Particles (disabled on mobile for performance) */}
      {!isMobile &&
        [...Array(15)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute bg-white/30 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
            }}
            animate={{
              y: [0, -10, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
            }}
          />
        ))}

      {/* 🌌 Content */}
      <div className="relative z-10 flex flex-col text-amber-300 items-center text-center">
        <Title
          title="What We Offer"
          desc="Just as light returns after an eclipse, we bring clarity, creativity, and growth to your digital journey."
        />

        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="group relative flex flex-col items-center p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 hover:border-indigo-400/40 transition-all duration-500 will-change-transform"
            >
              <motion.div
                className="mb-6"
                whileHover={{ scale: isMobile ? 1 : 1.08 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-44 h-44 sm:w-56 sm:h-56 object-contain opacity-90"
                />
              </motion.div>

              <h3 className="text-[22px] sm:text-[25px] text-amber-300 mb-6 font-semibold">
                {service.title}
              </h3>
              <p className="text-white text-sm sm:text-md leading-relaxed">
                {service.desc}
              </p>

              {/* soft hover glow */}
              <motion.div
                className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition duration-700 blur-2xl -z-10"
              ></motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
