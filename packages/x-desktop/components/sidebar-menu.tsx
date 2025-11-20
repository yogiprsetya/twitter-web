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
} from '@twitter-web/ui';

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

export const SidebarMenu = () => {
  return (
    <>
      {NAV.map((v) => (
        <a
          key={v.label}
          className="[&_svg]:size-6 flex items-center gap-5 h-13 px-3"
        >
          {v.icon.default} <span className="font-bold text-lg">{v.label}</span>
        </a>
      ))}

      <button type="button" className="flex items-center gap-5 h-14 px-3 mb-4">
        <MoreIcon className="size-6 " />{' '}
        <span className="font-bold text-lg">More</span>
      </button>
    </>
  );
};
