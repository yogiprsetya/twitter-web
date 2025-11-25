'use client';

import { useRouter } from 'next/navigation';
import { PlusIcon } from '@twitter-web/ui';

export const ComposeFAB = () => {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => router.push('/compose')}
      className="fixed bottom-20 right-4 z-40 size-14 bg-primary-blue rounded-full flex items-center justify-center shadow-lg hover:bg-primary-blue/90 active:scale-95 transition-all"
      aria-label="Compose tweet"
    >
      <PlusIcon className="size-6 text-white" />
    </button>
  );
};
