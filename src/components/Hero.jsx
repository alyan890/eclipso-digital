import React from 'react'
import assets from '../assets/assets'
import { motion } from "framer-motion"

const Hero = () => {

   const text = "Turning imagination into digital impact.".split(" ");
  return (
    <div 
      id='hero' 
      className='flex flex-col items-center gap-6 py-20 px-4 sm:px-12 lg:px-40 text-center w-full overflow-hidden text-gray-700 bg-white dark:text-white dark:bg-gray-900'
    >
      <motion.div 
      ititial={{ opacity: 0, y:20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.7 }}
      viewport={{ once:true }}
       className='inline-flex items-center gap-2 border border-gray-300 dark:border-gray-700 p-1.5 pr-4 rounded-full'>
        <img className='w-20' src={assets.group_profile} alt="Group profile"/>
        <p className='text-xs font-medium'>Trusted by 10K+ people</p>
      </motion.div>

    <motion.h1
  className="text-4xl sm:text-5xl md:text-6xl xl:text-[84px] font-extrabold  xl:leading-[95px] text-amber-300 max-w-5xl flex flex-wrap gap-3"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={{
    visible: {
      transition: {
        staggerChildren: 0.08, // delay between each word
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

  {/* ✨ Floating subtle animation after appearing */}
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


      <motion.p 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity:1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      viewport={{ once: true }}
      className='text-sm sm:text-lg font-medium text-gray-500 dark:text-white/75 max-w-4/5 sm:max-w-lg pb-3'>We don’t just build websites or apps — we create experiences that inspire, engage, and leave a lasting digital footprint.</motion.p>

      <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 2 }}
      viewport={{ once: true }}
       className='relative'>
        <img src={assets.bg} alt='' className='w-full max-w-6xl relative z-10 ' />
      </motion.div>
    </div>
  )
}

export default Hero
