import React, { ReactNode } from 'react';

interface SidebarHeaderProps {
  children: ReactNode;
};

export const SidebarHeader = ({ children } : SidebarHeaderProps) => {
  return(
    <div className="flex items-center gap-2">
      {children}
    </div>
  );
};