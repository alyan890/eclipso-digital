import React from 'react'
import assets from '../assets/assets'
import { motion } from "framer-motion"

const Footer = ({ theme }) => {
  const bg = theme === 'dark' ? 'bg-black' : 'bg-black'
  const text = theme === 'dark' ? 'text-white' : 'text-white'
  const border = theme === 'dark' ? 'border-gray-600' : 'border-gray-300'
  const inputText = theme === 'dark' ? 'text-gray-200' : 'text-gray-700'

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className={`${bg} ${text} pt-20 mt-20 px-6 sm:px-12 lg:px-24 xl:px-40`}>

      {/* Top Section */}
      <div className='flex flex-col lg:flex-row justify-between gap-12 lg:gap-20'>
        {/* Logo + About */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className='flex-1 space-y-5'>

          <img
            src={theme === 'dark' ? assets.logo_dark : assets.logo}
            alt='Logo'
            className='w-36 sm:w-44'
          />
          <div className='flex gap-4'>
            <a href="#"><img src={assets.facebook_icon} alt='Facebook' className='w-5 h-5 hover:opacity-80 transition'/></a>
            <a href="#"><img src={assets.twitter_icon} alt='Twitter' className='w-5 h-5 hover:opacity-80 transition'/></a>
            <a href="#"><img src={assets.instagram_icon} alt='Instagram' className='w-5 h-5 hover:opacity-80 transition'/></a>
            <a href="#"><img src={assets.linkedin_icon} alt='LinkedIn' className='w-5 h-5 hover:opacity-80 transition'/></a>
          </div>
        </motion.div>

        {/* Links Section */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className='flex flex-wrap flex-1 justify-between gap-8'>

          {/* Company */}
          <div>
            <h4 className='font-semibold mb-3 mt-10'>Company</h4>
            <ul className='space-y-2 text-sm'>
              <li><a href="#about" className='hover:text-primary transition-colors'>About Us</a></li>
              <li><a href="#team" className='hover:text-primary transition-colors'>Team</a></li>
              <li><a href="#careers" className='hover:text-primary transition-colors'>Careers</a></li>
              <li><a href="#contact-us" className='hover:text-primary transition-colors'>Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className='font-semibold mb-3 mt-10'>Services</h4>
            <ul className='space-y-2 text-sm'>
              <li><a href="#web-dev" className='hover:text-primary transition-colors'>Web Development</a></li>
              <li><a href="#app-dev" className='hover:text-primary transition-colors'>App Development</a></li>
              <li><a href="#ui-ux" className='hover:text-primary transition-colors'>UI/UX Design</a></li>
              <li><a href="#digital-marketing" className='hover:text-primary transition-colors'>Digital Marketing</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className='font-semibold mb-3 mt-10'>Resources</h4>
            <ul className='space-y-2 text-sm'>
              <li><a href="#blog" className='hover:text-primary transition-colors'>Blog</a></li>
              <li><a href="#guides" className='hover:text-primary transition-colors'>Guides</a></li>
              <li><a href="#faq" className='hover:text-primary transition-colors'>FAQ</a></li>
              <li><a href="#support" className='hover:text-primary transition-colors'>Support</a></li>
            </ul>
          </div>

        
        </motion.div>
      </div>

      {/* Bottom Section */}
      <hr className={`border ${border} my-8`} />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className='flex flex-col sm:flex-row justify-center items-center gap-4 text-amber-300 text-lg'>
        <p>© 2023 | All rights reserved.</p>
      </motion.div>
    </motion.footer>
  )
}

export default React.memo(Footer)
