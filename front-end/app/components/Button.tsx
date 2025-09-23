import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className = '',
  onClick,
  disabled 
}) => {
  const baseClasses =
    'inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variantClasses = {
    primary:
      'bg-green-600 text-white hover:bg-green-700 hover:shadow-lg hover:scale-105 focus:ring-green-500 active:transform active:scale-95',
    secondary:
      'bg-white text-gray-700 border-2 border-gray-200 hover:border-green-300 hover:text-green-700 hover:shadow-md hover:scale-105 focus:ring-green-500 active:transform active:scale-95'
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
