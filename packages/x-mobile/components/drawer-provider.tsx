'use client';

import { useState } from 'react';
import { SidebarDrawer } from './sidebar-drawer';
import { Header } from './header';

export const DrawerProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

  return (
    <>
      <Header onMenuClick={openDrawer} />
      <SidebarDrawer isOpen={isDrawerOpen} onClose={closeDrawer} />
      {children}
    </>
  );
};
