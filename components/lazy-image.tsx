'use client'

import { useState, useEffect } from 'react'
import Image, { ImageProps } from 'next/image'
import { motion } from 'framer-motion'

interface LazyImageProps extends Omit<ImageProps, 'src'> {
  src: string
}

export function LazyImage({ src, alt, ...props }: LazyImageProps) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const img = new window.Image()
    img.src = src
    img.onload = () => setIsLoading(false)
  }, [src])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isLoading ? 0 : 1 }}
      transition={{ duration: 0.5 }}
    >
      <Image
        src={src}
        alt={alt}
        {...props}
        className={`transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'} ${props.className || ''}`}
      />
    </motion.div>
  )
}

