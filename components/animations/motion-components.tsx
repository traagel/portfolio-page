'use client'

import { motion } from 'framer-motion'

export const FadeInWhenVisible = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0.95 }
      }}
    >
      {children}
    </motion.div>
  )
}

export const HoverCard = motion.div

