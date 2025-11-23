import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { company_logos } from "../assets/assets";

const TechStack = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const check = () => setIsDarkMode(
      typeof document !== 'undefined' && document.documentElement.classList.contains('dark')
    );
    check();
    const mo = new MutationObserver(() => check());
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => mo.disconnect();
  }, []);

  return (
    <section
      id="tech"
      className="relative flex flex-col items-center px-6 sm:px-12 lg:px-32 py-24 bg-white text-gray-800 dark:bg-black dark:text-white overflow-hidden transition-colors duration-500"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-100/40 to-transparent dark:via-gray-800/30"></div>

      {/* Heading */}
      <div className="relative z-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl text-amber-300 font-extrabold mb-6 mx-auto"
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

      {/* Marquee for md+ screens, grid for small screens */}
      <div className="relative w-full py-6">
        {/* Mobile / Small screens: wrapping grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-6 items-center justify-items-center md:hidden">
          {company_logos.map((logo, i) => {
            const isDarkLogo = typeof logo === 'string' && /(next(-|_)?js|next-js|next|flutter)/.test(logo.toLowerCase());
            const style = isDarkLogo && isDarkMode ? { filter: 'invert(1) brightness(2)' } : undefined;
            return (
              <img
                key={i}
                src={logo}
                alt={`tech-${i}`}
                loading="lazy"
                decoding="async"
                style={style}
                className="h-10 sm:h-12 object-contain opacity-90"
              />
            );
          })}
        </div>

        {/* Desktop / md+ screens: marquee animation */}
        <div className="hidden md:flex relative w-full overflow-hidden py-6 justify-center">
          <motion.div
            className="flex gap-16 lg:gap-24 items-center"
            animate={{ x: ["0%", "-100%"] }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          >
            {[...company_logos, ...company_logos].map((logo, index) => {
              const isDarkLogo = typeof logo === 'string' && /(next(-|_)?js|next-js|next|flutter)/.test(logo.toLowerCase());
              const style = isDarkLogo && isDarkMode ? { filter: 'invert(1) brightness(2)' } : undefined;
              return (
                <img
                  key={index}
                  src={logo}
                  alt={`tech-${index}`}
                  loading="lazy"
                  decoding="async"
                  style={style}
                  className="h-12 md:h-16 lg:h-20 object-contain opacity-80 hover:opacity-100 transition-all"
                />
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(TechStack);
