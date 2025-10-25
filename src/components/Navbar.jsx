import React, { useState } from "react";
import { motion } from "framer-motion";
import ThemeToggleBtn from "./ThemeToggleBtn";
import assets from "../assets/assets";

const Navbar = ({ theme, setTheme }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-40 py-3 sticky top-0 z-50 backdrop-blur-xl font-medium bg-slate-50/70 dark:bg-gray-900/70 shadow-sm"
    >
      {/* ✅ Logo Section */}
      <a href="#" className="flex items-center">
        <img
          src={theme === "dark" ? assets.logo_dark : assets.logo}
          alt="Eclipso Digital Logo"
          className="h-14 sm:h-14 w-auto object-contain transition-all duration-300"
          style={{
            transform: "scale(2.95)", // makes logo visibly larger
            transformOrigin: "left center", // keeps it aligned properly
            filter:
              theme === "light"
                ? "brightness(0) contrast(1.2)" // make white logo visible in light theme
                : "none",
          }}
        />
      </a>

      {/* ✅ Navigation Links */}
      <div
        className={`text-gray-800 dark:text-white sm:text-sm ${
          !sidebarOpen
            ? "max-sm:w-0 overflow-hidden"
            : "max-sm:w-60 max-sm:pl-10"
        } max-sm:fixed top-0 bottom-0 right-0 max-sm:min-h-screen max-sm:h-full 
        max-sm:flex-col max-sm:bg-primary max-sm:text-white max-sm:pt-20 
        flex sm:items-center gap-6 transition-all duration-300 ease-in-out`}
      >
        {/* Close Button (Mobile) */}
        <img
          src={assets.close_icon}
          alt="Close"
          className="w-5 absolute right-4 top-4 sm:hidden cursor-pointer"
          onClick={() => setSidebarOpen(false)}
        />

        <a onClick={() => setSidebarOpen(false)} href="#" className="hover:text-amber-300 transition-colors">
          Home
        </a>
        <a onClick={() => setSidebarOpen(false)} href="#services" className="hover:text-amber-300 transition-colors">
          Services
        </a>
        <a onClick={() => setSidebarOpen(false)} href="#our-work" className="hover:text-amber-300 transition-colors">
          Our Work
        </a>
        <a onClick={() => setSidebarOpen(false)} href="#contact-us" className="hover:text-amber-300 transition-colors">
          Contact Us
        </a>
      </div>

      {/* ✅ Right Side Buttons */}
      <div className="flex items-center gap-3 sm:gap-5">
        {/* Menu Icon (Mobile) */}
        <img
          src={theme === "dark" ? assets.menu_icon_dark : assets.menu_icon}
          onClick={() => setSidebarOpen(true)}
          className="w-8 sm:hidden cursor-pointer"
          alt="Menu"
        />

        {/* Theme Toggle Button */}
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
  );
};

export default Navbar;
