import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import Title from "./Title";

gsap.registerPlugin(ScrollTrigger);

const OurProcess = () => {
  const sectionRef = useRef(null);
  const stepsRef = useRef([]);

  useEffect(() => {
    const elements = stepsRef.current;

    gsap.fromTo(
      elements,
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        stagger: 0.25,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      }
    );
  }, []);

  const processSteps = [
    {
      title: "Research & Discovery",
      desc: "We start by understanding your goals, audience, and competition to craft the perfect digital strategy.",
      icon: "🔍",
    },
    {
      title: "Strategy & Planning",
      desc: "We build a strong roadmap focusing on design, user experience, and brand positioning.",
      icon: "🧠",
    },
    {
      title: "Design & Development",
      desc: "From UX to final product, our creative team designs and develops with purpose and precision.",
      icon: "🎨",
    },
    {
      title: "Launch & Grow",
      desc: "We test, refine, and launch your product — then help you scale it to the next level.",
      icon: "🚀",
    },
  ];

  return (
    <section
      id="our-process"
      ref={sectionRef}
      className="relative flex flex-col items-center px-6 sm:px-12 lg:px-32 py-24 
      bg-white text-gray-800 dark:bg-black dark:text-white overflow-hidden transition-colors duration-500"
    >
      {/* Section Title */}
      <div className="text-center space-y-4">
        <Title
          title="Our Process"
          desc="We follow a proven workflow that ensures every project is creative, effective, and goal-driven."
        />
      </div>

      {/* Process Steps */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16 max-w-6xl">
        {processSteps.map((step, index) => (
          <motion.div
            key={index}
            ref={(el) => (stepsRef.current[index] = el)}
            className="relative group 
            bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900
            rounded-2xl p-8 border border-transparent hover:border-amber-400 
            transition-all duration-500 hover:shadow-[0_0_25px_rgba(251,191,36,0.2)] hover:-translate-y-3"
          >
            {/* Icon Circle */}
            <div className="flex items-center justify-center w-14 h-14 rounded-full bg-amber-400 text-2xl mb-5 
              transition-transform duration-500 group-hover:rotate-12">
              {step.icon}
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold mb-3 
              group-hover:text-amber-500 dark:group-hover:text-amber-400 transition-colors duration-300">
              {step.title}
            </h3>

            {/* Description */}
            <p className="text-sm opacity-80 leading-relaxed">
              {step.desc}
            </p>

            {/* Floating Step Number */}
            <div className="absolute top-5 right-5 text-gray-400 text-sm font-medium opacity-30 select-none">
              0{index + 1}
            </div>

            {/* Bottom Glow Line */}
            <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-amber-400 rounded-full 
              transition-all duration-500 group-hover:w-full"></div>
          </motion.div>
        ))}
      </div>

      {/* Soft Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,200,0,0.05),transparent_70%)] pointer-events-none"></div>
    </section>
  );
};

export default React.memo(OurProcess);
