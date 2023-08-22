import React, { useState, ReactNode, useEffect } from 'react';
import { twMerge } from 'tailwind-merge';

interface ImageWithSkeletonProps {
  src: string;
  alt: string;
  children?: ReactNode;
  className?: string;
}

const ImageWithSkeleton: React.FC<ImageWithSkeletonProps> = ({
  className = '',
  src,
  alt,
  children,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const image = new Image();
    image.src = src;
    image.onload = () => {
      setImageLoaded(true);
    };
  }, [src]);

  return (
    <div className={twMerge('relative', className)}>
      {!imageLoaded && (
        <div className='absolute inset-0 animate-pulse bg-gray-300'></div>
      )}
      <img
        src={src}
        alt={alt}
        className={`w-full ${
          imageLoaded
            ? 'block opacity-0 transition-opacity delay-300 duration-5000 ease-in-out'
            : 'hidden'
        }`}
        style={{ opacity: imageLoaded ? 1 : 0 }}
      />
      {children}
    </div>
  );
};

export default ImageWithSkeleton;
