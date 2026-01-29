import React from 'react';
import { ZEN_STANDARD_THEME } from '../constants';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ href, children, className, ...props }) => {
  const { styles } = ZEN_STANDARD_THEME;
  // Overriding standard theme for a more bespoke look in the component if needed, 
  // but starting with the theme class.
  const baseClass = "inline-flex items-center justify-center px-6 py-3 text-sm font-medium tracking-wide transition-all duration-300 ease-out transform";
  const variantClass = "bg-black text-white hover:bg-gray-800 hover:-translate-y-0.5";
  
  const combinedClass = `${baseClass} ${variantClass} ${className || ''}`;

  if (href) {
    return (
      <a href={href} className={combinedClass} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClass} {...props}>
      {children}
    </button>
  );
};