'use client'

import { motion } from 'framer-motion'

type FadeInUpProps = {
  children: React.ReactNode
  delay?: number
  className?: string
}

export default function FadeInUp({
  children,
  delay = 0,
  className = '',
}: FadeInUpProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28, filter: 'blur(10px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.95,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}