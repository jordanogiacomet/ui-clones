import React, { ReactNode } from 'react';

interface SidebarNavProps {
  children: ReactNode;
  className: string;
};

export const SidebarNav = ({ children, className }: SidebarNavProps) => {
  return(
    <nav className={`${className}`}>
    {children}
    </nav>
  );
};