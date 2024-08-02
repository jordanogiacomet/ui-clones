import React, { ReactNode } from 'react';

interface SidebarLinkProps {
  href: string;
  children: ReactNode;
  className: string;
};

export const SidebarLink = ({ href, children, className }: SidebarLinkProps) => {
  return(
    <a href={href} className={`${className}`}>{children}</a>
  );
};