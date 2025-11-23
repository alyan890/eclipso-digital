import React, { useRef, useState } from 'react'
import { motion } from "framer-motion"

const ServiceCard = ({ service, index }) => {

    const [visible, setVisible] = useState(false);

    const divRef = useRef(null)
    const glowRef = useRef(null)

    // Avoid state updates on every mouse move — update glow position via ref/style for performance
    const handleMouseMove = (e) => {
        if (!divRef.current || !glowRef.current) return
        const bounds = divRef.current.getBoundingClientRect();
        const x = e.clientX - bounds.left
        const y = e.clientY - bounds.top
        // use transform for GPU-accelerated updates; center based on glow size for responsive blobs
        const glowRect = glowRef.current.getBoundingClientRect();
        const gx = x - (glowRect.width / 2)
        const gy = y - (glowRect.height / 2)
        glowRef.current.style.transform = `translate3d(${gx}px, ${gy}px, 0)`
    }

    return (
        <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y:  0 }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.45, delay:index * 0.12 }}
        viewport={{ once: true }}
        className='relative overflow-hidden max-w-lg m-2 sm:m-4 rounded-xl border border-gray-200 dark:border-gray-700 shadow-2xl shadow-gray-100 dark:shadow-white/10'
        onMouseEnter={() => setVisible(true)} onMouseLeave={() => setVisible(false)} ref={divRef} onMouseMove={handleMouseMove}>
            <div
                ref={glowRef}
                className={`pointer-events-none blur-xl rounded-full bg-gradient-to-r from-blue-500 to-purple-500 w-[50vw] sm:w-[300px] h-[50vw] sm:h-[300px] absolute z-0 transition-opacity duration-500 ${visible ? 'opacity-70' : 'opacity-0'} dark:mix-blend-lighten mix-blend-multiply`}
                style={{ willChange: 'transform, opacity' }}
            />
            <div className='flex items-center gap-6 p-6 transition-transform rounded-[10px] bg-white dark:bg-gray-900 z-10 relative' style={{ willChange: 'transform, opacity' }}>

                <div className='bg-gray-100 dark:bg-gray-700 rounded-full'>
                    <img src={service.icon} alt={service.title} loading='lazy' decoding='async' className='w-12 h-12 sm:w-16 sm:h-16 bg-white dark:bg-gray-900 rounded-full m-2' style={{ willChange: 'transform, opacity' }} />
                </div>
                <div className='flex-1'>
                    <h3 className='font-bold'>{service.title}</h3>
                    <p className='text-sm mt-2'>{service.description}</p>
                </div>
            </div>
        </motion.div>
    )
}

export default React.memo(ServiceCard)