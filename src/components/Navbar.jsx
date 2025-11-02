import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggleBtn from "./ThemeToggleBtn";
import assets from "../assets/assets";

const Navbar = ({ theme, setTheme }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-40 py-3 sticky top-0 z-50 backdrop-blur-xl font-medium bg-slate-50/70 dark:bg-gray-900/70 shadow-sm"
      >
        {/* ✅ Logo */}
        <a href="#" className="flex items-center">
          <img
            src={theme === "dark" ? assets.logo_dark : assets.logo}
            alt="Eclipso Digital Logo"
            className="h-14 sm:h-14 w-auto object-contain transition-all duration-300"
            style={{
              transform: "scale(2.95)",
              transformOrigin: "left center",
              filter:
                theme === "light"
                  ? "brightness(0) contrast(1.2)"
                  : "none",
            }}
          />
        </a>

        {/* ✅ Desktop Links */}
        <div className="hidden sm:flex items-center gap-6 text-gray-800 dark:text-white text-sm">
          <a href="#" className="hover:text-amber-300 transition-colors">
            Home
          </a>
          <a href="#services" className="hover:text-amber-300 transition-colors">
            Services
          </a>
          <a href="#our-work" className="hover:text-amber-300 transition-colors">
            Our Work
          </a>
          <a href="#contact-us" className="hover:text-amber-300 transition-colors">
            Contact Us
          </a>
        </div>

        {/* ✅ Right Side */}
        <div className="flex items-center gap-3 sm:gap-5">
          {/* Mobile Menu Button */}
          <img
            src={theme === "dark" ? assets.menu_icon_dark : assets.menu_icon}
            onClick={() => setSidebarOpen(true)}
            className="w-8 sm:hidden cursor-pointer"
            alt="Menu"
          />

          {/* Theme Toggle */}
          <ThemeToggleBtn theme={theme} setTheme={setTheme} />

          {/* Connect Button */}
          <a
            href="#contact-us"
            className="text-sm max-sm:hidden flex items-center gap-2 bg-primary text-white px-6 py-2 rounded-full cursor-pointer hover:scale-105 transition-all shadow-md"
          >
            Connect
            <img src={assets.arrow_icon} width={14} alt="Arrow" />
          </a>
        </div>
      </motion.nav>

      {/* ✅ Fullscreen Mobile Overlay Menu */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="fixed inset-0 bg-black/95 backdrop-blur-md flex flex-col items-center justify-center space-y-10 text-3xl sm:text-4xl font-extrabold text-amber-300 z-50"
          >
            {/* Close Button */}
           <img
  src="data:image/svg+xml,%3csvg%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='Menu%20/%20Close_LG'%3e%3cpath%20d='M21%2021L12%2012M12%2012L3%203M12%2012L21.0001%203M12%2012L3%2021.0001'%20stroke='%23ffffff'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3c/path%3e%3c/g%3e%3c/svg%3e"
  alt="Close"
  onClick={() => setSidebarOpen(false)}   // 👈 ye line functionality add karegi
  className="w-6 absolute top-8 right-8 cursor-pointer z-[60]"
/>


            {/* Background gradient effects */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,200,255,0.15),transparent_70%)] opacity-50"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(75,0,255,0.15),transparent_60%)] opacity-40"></div>

            {/* Menu Links */}
            {["Home", "Services", "Our Work", "Contact Us"].map((item, i) => (
              <motion.a
                key={i}
                href={
                  item === "Home"
                    ? "#"
                    : `#${item.toLowerCase().replace(/\s/g, "-")}`
                }
                onClick={() => setSidebarOpen(false)}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="relative group"
              >
                <span className="group-hover:bg-gradient-to-r group-hover:from-sky-400 group-hover:via-cyan-500 group-hover:to-teal-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                  {item}
                </span>
                <div className="absolute -bottom-1 left-0 w-0 h-1 bg-gradient-to-r from-sky-400 to-teal-400 group-hover:w-full transition-all duration-500"></div>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
