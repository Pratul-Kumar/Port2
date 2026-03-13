import React from 'react'
import { motion } from 'framer-motion'
import { useLazyLoad } from '../hooks/useLazyLoad'

const LazySectionWrapper = ({ children, className = '' }) => {
  const [ref, isVisible] = useLazyLoad()

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.98 }}
      animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ 
        duration: 0.8, 
        ease: [1, 0, 0, 1], // Custom cubic-bezier for snappy feel
        scale: { type: "spring", stiffness: 100, damping: 20 }
      }}
      className={`relative ${className}`}
    >
      {children}
    </motion.div>
  )
}

export default LazySectionWrapper

