import React from 'react'
import assets from '../assets/assets'
import { motion } from 'framer-motion'

const Footer = ({ theme }) => {
  const border = theme === 'dark' ? 'border-gray-600' : 'border-gray-300'
  const linkGroups = [
    { title: 'Company', links: [['About Us', '#about'], ['Team', '#team'], ['Careers', '#careers'], ['Contact', '#contact-us']] },
    { title: 'Services', links: [['Web Development', '#web-dev'], ['App Development', '#app-dev'], ['UI/UX Design', '#ui-ux'], ['Digital Marketing', '#digital-marketing']] },
    { title: 'Resources', links: [['Blog', '#blog'], ['Guides', '#guides'], ['FAQ', '#faq'], ['Support', '#support']] },
  ]

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }} viewport={{ once: true }}
      className='bg-black text-white pt-20 mt-20 px-6 sm:px-12 lg:px-24 xl:px-40'>
      <div className='flex flex-col lg:flex-row justify-between gap-12 lg:gap-20'>
        <motion.div
          initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }} viewport={{ once: true }}
          className='flex-1 space-y-5'>
          <img src={theme === 'dark' ? assets.logo_dark : assets.logo} alt='Eclipso Digital' className='w-36 sm:w-44' />
          <p className='max-w-md text-sm text-gray-300'>
            Eclipso Lead Engine is our private tool for organizing public business
            leads, sending approved introductions, and tracking replies and opt-outs
            through our own Gmail account.{' '}
            <a className='underline hover:text-primary' href='/lead-engine/'>About the Lead Engine</a>
          </p>
          <div className='flex gap-4'>
            <a href='#'><img src={assets.facebook_icon} alt='Facebook' className='w-5 h-5 hover:opacity-80 transition' /></a>
            <a href='#'><img src={assets.twitter_icon} alt='Twitter' className='w-5 h-5 hover:opacity-80 transition' /></a>
            <a href='#'><img src={assets.instagram_icon} alt='Instagram' className='w-5 h-5 hover:opacity-80 transition' /></a>
            <a href='#'><img src={assets.linkedin_icon} alt='LinkedIn' className='w-5 h-5 hover:opacity-80 transition' /></a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }} viewport={{ once: true }}
          className='flex flex-wrap flex-1 justify-between gap-8'>
          {linkGroups.map(group => (
            <div key={group.title}>
              <h4 className='font-semibold mb-3 mt-10'>{group.title}</h4>
              <ul className='space-y-2 text-sm'>
                {group.links.map(([label, href]) => <li key={label}><a href={href} className='hover:text-primary transition-colors'>{label}</a></li>)}
              </ul>
            </div>
          ))}
        </motion.div>
      </div>
      <hr className={`border ${border} my-8`} />
      <motion.div
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }} viewport={{ once: true }}
        className='flex flex-col sm:flex-row justify-center items-center gap-4 text-amber-300 text-sm pb-6'>
        <p>Copyright {new Date().getFullYear()} © Eclipso Digital.</p>
        <nav aria-label='Legal information' className='flex flex-wrap gap-4'>
          <a className='underline hover:text-primary' href='/privacy/'>Privacy Policy</a>
          <a className='underline hover:text-primary' href='/terms/'>Terms of Use</a>
        </nav>
      </motion.div>
    </motion.footer>
  )
}

export default React.memo(Footer)
