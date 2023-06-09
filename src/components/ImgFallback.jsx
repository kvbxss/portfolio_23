import React from 'react'

const ImgFallback = ({
    src,
    fallback,
    type = 'image/webp',
    alt,
    ...delegated
}) => {
  return (
    <picture>
        <source srcSet={src} type={type} />
        <img src={fallback} {...delegated} alt={alt}  />
    </picture>
  )
}

export default ImgFallback;