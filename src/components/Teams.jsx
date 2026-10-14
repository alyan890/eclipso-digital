import React from "react";
import Title from "./Title";
import { motion } from "framer-motion";

const features = [
  {
    title: "High Quality Work",
    desc: "We deliver premium results with attention to detail.",
    icon: "⭐",
  },
  {
    title: "Fast Delivery",
    desc: "Quick turnaround times without compromising quality.",
    icon: "⚡",
  },
  {
    title: "24/7 Support",
    desc: "We are always available to assist you anytime.",
    icon: "📞",
  },
  {
    title: "Affordable Pricing",
    desc: "Top-quality services at budget-friendly rates.",
    icon: "💰",
  },
];

const WhyChooseUs = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="flex flex-col pt-4 items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 
      text-gray-800 bg-white dark:text-white dark:bg-gray-900"
    >
      <Title
        title="Why Choose Us"
        desc="We provide exceptional value and unmatched quality for your brand."
      />

      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
        {features.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center gap-4 p-6 rounded-xl border 
            border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-xl 
            shadow-gray-200 dark:shadow-white/5 hover:scale-[1.03] transition-all duration-300"
          >
            <div className="text-5xl">{item.icon}</div>
            <h3 className="font-bold text-amber-300 text-base">{item.title}</h3>
            <p className="text-sm opacity-70">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default WhyChooseUs;
