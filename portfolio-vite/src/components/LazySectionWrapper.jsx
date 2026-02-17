import React from 'react'
import { useLazyLoad } from '../hooks/useLazyLoad'

const LazySectionWrapper = ({ children, className = '' }) => {
  const [ref, isVisible] = useLazyLoad()

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-10'
      } ${className}`}
    >
      {/* Always render children so their id attributes exist in the DOM
          for programmatic scrolling (nav links). The visual reveal is CSS-only. */}
      {children}
    </div>
  )
}

export default LazySectionWrapper
