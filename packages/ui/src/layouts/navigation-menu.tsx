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
} from '~/icons';

export const SIDEBAR_MENU = [
  {
    label: 'Home',
    link: '/',
    icon: {
      default: <HomeIconDefault />,
      selected: <HomeIconSelected />,
    },
  },
  {
    label: 'Explore',
    link: '/explore',
    icon: {
      default: <ExploreIconDefault />,
      selected: <ExploreIconSelected />,
    },
  },
  {
    label: 'Notification',
    link: '/notification',
    icon: {
      default: <NotificationsIconDefault />,
      selected: <NotificationsIconSelected />,
    },
  },
  {
    label: 'Messages',
    link: '/messages',
    icon: {
      default: <MessagesIconDefault />,
      selected: <MessagesIconSelected />,
    },
  },
  {
    label: 'Bookmarks',
    link: '/bookmarks',
    icon: {
      default: <BookmarksIconDefault />,
      selected: <BookmarksIconSelected />,
    },
  },
  {
    label: 'Lists',
    link: '/lists',
    icon: {
      default: <ListsIconDefault />,
      selected: <ListsIconSelected />,
    },
  },
  {
    label: 'Profile',
    link: '/profile',
    icon: {
      default: <ProfileIconDefault />,
      selected: <ProfileIconSelected />,
    },
  },
];

export const NAVIGATION_MENU = [
  {
    link: '/',
    label: 'Feeds',
    icon: {
      default: <HomeIconDefault />,
      selected: <HomeIconSelected />,
    },
  },
  {
    label: 'Lists',
    link: '/lists',
    icon: {
      default: <ListsIconDefault />,
      selected: <ListsIconSelected />,
    },
  },
  {
    label: 'Explore',
    link: '/explore',
    icon: {
      default: <ExploreIconDefault />,
      selected: <ExploreIconSelected />,
    },
  },
  {
    label: 'Notification',
    link: '/notification',
    icon: {
      default: <NotificationsIconDefault />,
      selected: <NotificationsIconSelected />,
    },
  },
  {
    label: 'Messages',
    link: '/messages',
    icon: {
      default: <MessagesIconDefault />,
      selected: <MessagesIconSelected />,
    },
  },
];
