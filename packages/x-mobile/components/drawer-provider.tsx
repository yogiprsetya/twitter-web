'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { SidebarDrawer } from './sidebar-drawer';
import { Header } from './header';

export const DrawerProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const pathname = usePathname();

  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

  const isUsernamePath =
    pathname && pathname !== '/' && /^\/[^/]+$/.test(pathname);
  const isComposePath = pathname === '/compose';

  return (
    <>
      {!isUsernamePath && !isComposePath && <Header onMenuClick={openDrawer} />}
      <SidebarDrawer isOpen={isDrawerOpen} onClose={closeDrawer} />
      {children}
    </>
  );
};
