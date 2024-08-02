import React, { ReactNode } from 'react';

interface SidebarRootProps {
  children: ReactNode;
};

export const SidebarRoot = ({ children } : SidebarRootProps) => {
  return(
    <aside className="w-72 bg-zinc-950 p-6">
      {children}
    </aside>
  );
};