'use client';

import { useEffect } from 'react';
import {
  cn,
  MoreIcon,
  Avatar,
  AvatarImage,
  AvatarFallback,
  PlusIcon,
  NAVIGATION_MENU,
} from '@twitter-web/ui';

interface SidebarDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SidebarDrawer = ({ isOpen, onClose }: SidebarDrawerProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          'fixed inset-0 bg-black/50 z-40 transition-opacity duration-300',
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside
        className={cn(
          'fixed left-0 top-0 h-full w-[275px] bg-black dark:bg-black z-50 transform transition-transform duration-300 ease-in-out overflow-y-auto',
          isOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className="flex flex-col h-full">
          {/* User Profile Section */}
          <div className="p-4 border-b border-dark-4">
            <div className="flex items-start justify-between mb-4">
              <div className="flex flex-col gap-2">
                <Avatar className="size-12">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>YP</AvatarFallback>
                </Avatar>

                <div>
                  <p className="font-bold text-white text-base leading-4">
                    Yogi Prasetya
                  </p>

                  <p className="text-dark-6 text-sm">@yogiprsetya</p>
                </div>
              </div>

              <button
                type="button"
                className="size-8 rounded-full border border-dark-4 flex items-center justify-center hover:bg-dark-3 transition-colors"
                aria-label="Add account"
              >
                <PlusIcon className="size-4 text-white" />
              </button>
            </div>

            <div className="flex gap-4">
              <div>
                <span className="font-bold text-white text-sm">188</span>
                <span className="text-dark-6 text-sm ml-1">Following</span>
              </div>

              <div>
                <span className="font-bold text-white text-sm">255</span>
                <span className="text-dark-6 text-sm ml-1">Followers</span>
              </div>
            </div>
          </div>

          {/* Navigation Menu */}
          <nav className="flex-1 py-2">
            {NAVIGATION_MENU.map((item) => (
              <a
                key={item.label}
                href={item.link}
                className="[&_svg]:size-6 flex items-center gap-4 h-[52px] px-4 text-white hover:bg-dark-2 transition-colors"
                onClick={onClose}
              >
                {item.icon.default}
                <span className="font-medium text-base">{item.label}</span>
              </a>
            ))}
          </nav>

          {/* More Button */}
          <div className="p-4 border-t border-dark-4">
            <button
              type="button"
              className="size-10 rounded-full border border-dark-4 flex items-center justify-center hover:bg-dark-3 transition-colors mx-auto"
              aria-label="More options"
            >
              <MoreIcon className="size-5 text-white" />
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};
