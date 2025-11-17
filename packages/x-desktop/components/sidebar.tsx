import {
  HomeIconDefault,
  HomeIconSelected,
  ExploreIconDefault,
  ExploreIconSelected,
  NotificationsIconDefault,
  NotificationsIconSelected,
  MessagesIconDefault,
  MessagesIconSelected,
  BookmarksIconDefault,
  BookmarksIconSelected,
  ListsIconDefault,
  ListsIconSelected,
  ProfileIconDefault,
  ProfileIconSelected,
  MoreIcon,
  Button,
} from '@twitter-web/ui';
import LogoX from '~/public/logo-x.svg';

const NAV = [
  {
    label: 'Home',
    icon: {
      default: <HomeIconDefault />,
      selected: <HomeIconSelected />,
    },
  },
  {
    label: 'Explore',
    icon: {
      default: <ExploreIconDefault />,
      selected: <ExploreIconSelected />,
    },
  },
  {
    label: 'Notification',
    icon: {
      default: <NotificationsIconDefault />,
      selected: <NotificationsIconSelected />,
    },
  },
  {
    label: 'Messages',
    icon: {
      default: <MessagesIconDefault />,
      selected: <MessagesIconSelected />,
    },
  },
  {
    label: 'Bookmarks',
    icon: {
      default: <BookmarksIconDefault />,
      selected: <BookmarksIconSelected />,
    },
  },
  {
    label: 'Lists',
    icon: {
      default: <ListsIconDefault />,
      selected: <ListsIconSelected />,
    },
  },
  {
    label: 'Profile',
    icon: {
      default: <ProfileIconDefault />,
      selected: <ProfileIconSelected />,
    },
  },
];

export const Sidebar = () => {
  return (
    <aside style={{ width: 262 }} className="h-full mr-8">
      <div className="overflow-hidden size-[52px] rounded-full flex items-center justify-center">
        <LogoX className="fill-primary-blue dark:fill-white size-8" />
      </div>

      <nav className="mt-1 mb-6">
        {NAV.map((v) => (
          <a
            key={v.label}
            className="[&_svg]:size-6 flex items-center gap-5 h-14 px-3"
          >
            {v.icon.default}{' '}
            <span className="font-bold text-lg">{v.label}</span>
          </a>
        ))}

        <button type="button" className="flex items-center gap-5 h-14 px-3">
          <MoreIcon className="size-6 " />{' '}
          <span className="font-bold text-lg">More</span>
        </button>
      </nav>

      <Button size="big" className="w-full">
        Tweet
      </Button>
    </aside>
  );
};
