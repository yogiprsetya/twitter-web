import { Navigation } from '~/components/navigation';
import { DrawerProvider } from '~/components/drawer-provider';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DrawerProvider>
      <div className="flex max-w-7xl justify-between mx-auto min-h-screen">
        <main className="max-h-screen flex-1 flex justify-start grow pb-16">
          {children}
        </main>

        <Navigation />
      </div>
    </DrawerProvider>
  );
}
