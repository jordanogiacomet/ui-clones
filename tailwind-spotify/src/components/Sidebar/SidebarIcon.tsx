import React, {ElementType} from 'react';

interface SidebarIconProps {
  icon: ElementType;
}

export const SidebarIcon = ({ icon: Icon}: SidebarIconProps) => {
  return(
    <Icon />
  );
};
 