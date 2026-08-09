"use client";

import React, { useState } from 'react';

interface BlogImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackText?: string;
}

export default function BlogImage({ src, alt, className = "", fallbackText = "" }: BlogImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div className="absolute inset-0 bg-gray-200 group-hover:scale-105 transition-transform duration-500 flex items-center justify-center text-gray-400 font-bold">
        {fallbackText}
      </div>
    );
  }

  return (
    <img 
      src={src} 
      alt={alt} 
      className={className}
      onError={() => setHasError(true)}
    />
  );
}
