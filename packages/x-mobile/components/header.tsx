'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@twitter-web/ui';
import LogoX from '~/public/logo-x.svg';

interface HeaderProps {
  onMenuClick: () => void;
}

export const Header = ({ onMenuClick }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-30 bg-white dark:bg-dark-1 border-b border-dark-7 dark:border-dark-3">
      <div className="flex items-center justify-between h-14 px-4">
        <Avatar className="size-8" role="button" onClick={onMenuClick}>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>YP</AvatarFallback>
        </Avatar>

        <div className="w-6/12 flex items-center justify-between">
          <LogoX className="fill-primary-blue dark:fill-white size-5" />
        </div>
      </div>
    </header>
  );
};
