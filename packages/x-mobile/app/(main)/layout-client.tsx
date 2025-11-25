'use client';

import { usePathname } from 'next/navigation';
import { cn } from '@twitter-web/ui';
import { Navigation } from '~/components/navigation';
import dynamic from 'next/dynamic';

const ComposeFAB = dynamic(
  () => import('~/components/compose-fab').then((mod) => mod.ComposeFAB),
  {
    ssr: false,
  }
);

export function LayoutClient({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isComposePath = pathname === '/compose';

  return (
    <>
      <div className="flex max-w-7xl justify-between mx-auto min-h-screen">
        <main
          className={cn(
            'max-h-screen flex-1 flex justify-start grow',
            isComposePath ? 'pb-0' : 'pb-16'
          )}
        >
          {children}
        </main>

        {!isComposePath && <Navigation />}
      </div>

      {!isComposePath && <ComposeFAB />}
    </>
  );
}
