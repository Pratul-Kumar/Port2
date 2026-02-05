import React from 'react'
import { useLazyLoad } from '../hooks/useLazyLoad'

const LazyImage = ({ src, alt, className = '', placeholder = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23f0f0f0" width="400" height="300"/%3E%3C/svg%3E' }) => {
  const [ref, isVisible] = useLazyLoad()

  return (
    <img
      ref={ref}
      src={isVisible ? src : placeholder}
      alt={alt}
      className={`${className} transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-50'}`}
      loading="lazy"
    />
  )
}

export default LazyImage
