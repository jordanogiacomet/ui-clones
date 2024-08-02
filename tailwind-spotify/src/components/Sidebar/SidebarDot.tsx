import React from 'react';

interface DotProps {
  className?: string;
};

export const SideBarDot = ({ className }: DotProps) => {
  return (
    <div className={`w-3 h-3 rounded-full ${className}`} />
  );  
};