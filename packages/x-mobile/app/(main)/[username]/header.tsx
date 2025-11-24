'use client';

import { useRouter } from 'next/navigation';
import { BackArrowIcon } from '@twitter-web/ui';

type Props = {
  username: string;
};

export const Header = ({ username }: Props) => {
  const router = useRouter();

  return (
    <nav className="sticky top-0 z-20 bg-white dark:bg-dark-1 border-b border-dark-7 dark:border-dark-3 px-4 h-14 flex items-center gap-6">
      <button
        type="button"
        aria-label="Back to prev screen"
        onClick={() => router.back()}
      >
        <BackArrowIcon className="size-6 text-primary-blue" />
      </button>

      <div>
        <h1 className="font-bold leading-4">Davide Biscuso</h1>
        <small className="text-dark-6 text-sm">9 Tweets</small>
      </div>
    </nav>
  );
};
