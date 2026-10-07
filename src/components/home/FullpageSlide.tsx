'use client';

import React from 'react';

interface FullpageSlideProps {
  id: string;
  badge?: string;
  category?: string;
  children: React.ReactNode;
  theme?: 'light' | 'white' | 'slate' | 'dark';
  className?: string;
}

export default function FullpageSlide({
  id,
  children,
  theme = 'light',
  className = '',
}: FullpageSlideProps) {
  const bgStyles = {
    light: 'bg-gradient-to-b from-[#FAFBFD] via-white to-[#F0F8FF]',
    white: 'bg-white',
    slate: 'bg-gradient-to-b from-slate-50 via-white to-slate-50',
    dark: 'bg-[#0B1E3B]',
  }[theme];

  return (
    <div
      id={id}
      className={`fullpage-slide w-full h-full shrink-0 relative flex flex-col justify-center items-center overflow-hidden px-4 sm:px-6 lg:px-8 py-2 ${bgStyles} ${className}`}
    >
      <div className="max-w-7xl 2xl:max-w-[1400px] mx-auto w-full h-full flex flex-col justify-center items-center overflow-hidden">
        {children}
      </div>
    </div>
  );
}
