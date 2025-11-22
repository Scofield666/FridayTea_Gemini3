import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center';
  light?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ 
  title, 
  subtitle, 
  alignment = 'center',
  light = false
}) => {
  return (
    <div className={`mb-12 ${alignment === 'center' ? 'text-center' : 'text-left'}`}>
      <h2 className={`text-3xl md:text-5xl font-serif mb-4 ${light ? 'text-white' : 'text-stone-900'}`}>
        {title}
      </h2>
      {subtitle && (
        <div className={`w-20 h-1 bg-tea-accent mb-6 ${alignment === 'center' ? 'mx-auto' : ''}`}></div>
      )}
      {subtitle && (
        <p className={`text-lg font-light max-w-2xl ${alignment === 'center' ? 'mx-auto' : ''} ${light ? 'text-stone-200' : 'text-stone-600'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};