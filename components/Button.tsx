import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'white';
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  ...props 
}) => {
  const baseStyle = "px-8 py-3 rounded-full font-medium transition-all duration-300 tracking-wide text-sm uppercase";
  
  const variants = {
    primary: "bg-tea text-white hover:bg-tea-dark shadow-lg hover:shadow-xl",
    outline: "border-2 border-stone-800 text-stone-800 hover:bg-stone-800 hover:text-white",
    white: "bg-white text-stone-900 hover:bg-stone-100 shadow-md"
  };

  return (
    <button 
      className={`${baseStyle} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};