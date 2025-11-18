import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  EllipsesIcon,
} from '@twitter-web/ui';
import LogoX from '~/public/logo-x.svg';
import { SidebarMenu } from './sidebar-menu';

export const Sidebar = () => {
  return (
    <aside style={{ width: 275 }} className="h-full pr-8 relative">
      <div className="overflow-hidden size-[52px] rounded-full flex items-center justify-center">
        <LogoX className="fill-primary-blue dark:fill-white size-8" />
      </div>

      <nav className="mt-1 mb-10">
        <SidebarMenu />

        <Button size="big" className="w-full">
          Tweet
        </Button>
      </nav>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Avatar className="size-12">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>YP</AvatarFallback>
          </Avatar>

          <div className="flex flex-col justify-center">
            <p className="font-bold leading-3">Yogi Prasetya</p>
            <p className="font-medium text-dark-6">@yogiprsty</p>
          </div>
        </div>

        <EllipsesIcon className="size-8" />
      </div>
    </aside>
  );
};
