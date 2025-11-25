import { DrawerProvider } from '~/components/drawer-provider';
import { LayoutClient } from './layout-client';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DrawerProvider>
      <LayoutClient>{children}</LayoutClient>
    </DrawerProvider>
  );
}
