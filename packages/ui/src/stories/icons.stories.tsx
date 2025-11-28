import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  BackArrowIcon,
  BookmarksIconDefault,
  BookmarksIconSelected,
  CalendarIcon,
  ChevronDownIcon,
  CommentIcon,
  EllipsesIcon,
  EmojiIcon,
  ExploreIconDefault,
  ExploreIconSelected,
  EyeIcon,
  EyeOffIcon,
  GIFIcon,
  GlobeIcon,
  HomeIconDefault,
  HomeIconSelected,
  LikeIcon,
  LikeIconSelected,
  ListsIconDefault,
  ListsIconSelected,
  LocationIcon,
  MediaIcon,
  MenuIcon,
  MessagesIconDefault,
  MessagesIconSelected,
  MoreIcon,
  NotificationsIconDefault,
  NotificationsIconSelected,
  PollIcon,
  PlusIcon,
  ProfileIconDefault,
  ProfileIconSelected,
  RetweetIcon,
  ScheduleIcon,
  SearchIcon,
  ShareIcon,
  TopTweetIcon,
} from '../icons';

const meta = {
  title: 'Icons',
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

const IconGrid = ({ children }: { children: React.ReactNode }) => (
  <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6 p-4">
    {children}
  </div>
);

const IconItem = ({ name, icon }: { name: string; icon: React.ReactNode }) => (
  <div className="flex flex-col items-center gap-2">
    <div className="flex items-center justify-center w-12 h-12 text-dark-1">
      {icon}
    </div>
    <span className="text-xs text-center text-gray-600 dark:text-gray-400 max-w-[80px] truncate">
      {name}
    </span>
  </div>
);

export const AllIcons: Story = {
  render: () => (
    <IconGrid>
      <IconItem name="BackArrow" icon={<BackArrowIcon />} />
      <IconItem name="Bookmarks (Default)" icon={<BookmarksIconDefault />} />
      <IconItem name="Bookmarks (Selected)" icon={<BookmarksIconSelected />} />
      <IconItem name="Calendar" icon={<CalendarIcon />} />
      <IconItem name="ChevronDown" icon={<ChevronDownIcon />} />
      <IconItem name="Comment" icon={<CommentIcon />} />
      <IconItem name="Ellipses" icon={<EllipsesIcon />} />
      <IconItem name="Emoji" icon={<EmojiIcon />} />
      <IconItem name="Explore (Default)" icon={<ExploreIconDefault />} />
      <IconItem name="Explore (Selected)" icon={<ExploreIconSelected />} />
      <IconItem name="Eye" icon={<EyeIcon />} />
      <IconItem name="EyeOff" icon={<EyeOffIcon />} />
      <IconItem name="GIF" icon={<GIFIcon />} />
      <IconItem name="Globe" icon={<GlobeIcon />} />
      <IconItem name="Home (Default)" icon={<HomeIconDefault />} />
      <IconItem name="Home (Selected)" icon={<HomeIconSelected />} />
      <IconItem name="Like" icon={<LikeIcon />} />
      <IconItem name="Like (Selected)" icon={<LikeIconSelected />} />
      <IconItem name="Lists (Default)" icon={<ListsIconDefault />} />
      <IconItem name="Lists (Selected)" icon={<ListsIconSelected />} />
      <IconItem name="Location" icon={<LocationIcon />} />
      <IconItem name="Media" icon={<MediaIcon />} />
      <IconItem name="Menu" icon={<MenuIcon />} />
      <IconItem name="Messages (Default)" icon={<MessagesIconDefault />} />
      <IconItem name="Messages (Selected)" icon={<MessagesIconSelected />} />
      <IconItem name="More" icon={<MoreIcon />} />
      <IconItem
        name="Notifications (Default)"
        icon={<NotificationsIconDefault />}
      />
      <IconItem
        name="Notifications (Selected)"
        icon={<NotificationsIconSelected />}
      />
      <IconItem name="Poll" icon={<PollIcon />} />
      <IconItem name="Plus" icon={<PlusIcon />} />
      <IconItem name="Profile (Default)" icon={<ProfileIconDefault />} />
      <IconItem name="Profile (Selected)" icon={<ProfileIconSelected />} />
      <IconItem name="Retweet" icon={<RetweetIcon />} />
      <IconItem name="Schedule" icon={<ScheduleIcon />} />
      <IconItem name="Search" icon={<SearchIcon />} />
      <IconItem name="Share" icon={<ShareIcon />} />
      <IconItem name="TopTweet" icon={<TopTweetIcon />} />
    </IconGrid>
  ),
};

export const NavigationIcons: Story = {
  render: () => (
    <IconGrid>
      <IconItem name="Home (Default)" icon={<HomeIconDefault />} />
      <IconItem name="Home (Selected)" icon={<HomeIconSelected />} />
      <IconItem name="Explore (Default)" icon={<ExploreIconDefault />} />
      <IconItem name="Explore (Selected)" icon={<ExploreIconSelected />} />
      <IconItem
        name="Notifications (Default)"
        icon={<NotificationsIconDefault />}
      />
      <IconItem
        name="Notifications (Selected)"
        icon={<NotificationsIconSelected />}
      />
      <IconItem name="Messages (Default)" icon={<MessagesIconDefault />} />
      <IconItem name="Messages (Selected)" icon={<MessagesIconSelected />} />
      <IconItem name="Bookmarks (Default)" icon={<BookmarksIconDefault />} />
      <IconItem name="Bookmarks (Selected)" icon={<BookmarksIconSelected />} />
      <IconItem name="Lists (Default)" icon={<ListsIconDefault />} />
      <IconItem name="Lists (Selected)" icon={<ListsIconSelected />} />
      <IconItem name="Profile (Default)" icon={<ProfileIconDefault />} />
      <IconItem name="Profile (Selected)" icon={<ProfileIconSelected />} />
    </IconGrid>
  ),
};

export const ActionIcons: Story = {
  render: () => (
    <IconGrid>
      <IconItem name="Comment" icon={<CommentIcon />} />
      <IconItem name="Retweet" icon={<RetweetIcon />} />
      <IconItem name="Like" icon={<LikeIcon />} />
      <IconItem name="Like (Selected)" icon={<LikeIconSelected />} />
      <IconItem name="Share" icon={<ShareIcon />} />
      <IconItem name="More" icon={<MoreIcon />} />
      <IconItem name="Ellipses" icon={<EllipsesIcon />} />
    </IconGrid>
  ),
};

export const PostIcons: Story = {
  render: () => (
    <IconGrid>
      <IconItem name="Media" icon={<MediaIcon />} />
      <IconItem name="GIF" icon={<GIFIcon />} />
      <IconItem name="Poll" icon={<PollIcon />} />
      <IconItem name="Emoji" icon={<EmojiIcon />} />
      <IconItem name="Schedule" icon={<ScheduleIcon />} />
      <IconItem name="Location" icon={<LocationIcon />} />
      <IconItem name="Calendar" icon={<CalendarIcon />} />
    </IconGrid>
  ),
};

export const UtilityIcons: Story = {
  render: () => (
    <IconGrid>
      <IconItem name="Search" icon={<SearchIcon />} />
      <IconItem name="Menu" icon={<MenuIcon />} />
      <IconItem name="Plus" icon={<PlusIcon />} />
      <IconItem name="ChevronDown" icon={<ChevronDownIcon />} />
      <IconItem name="BackArrow" icon={<BackArrowIcon />} />
      <IconItem name="Globe" icon={<GlobeIcon />} />
      <IconItem name="Eye" icon={<EyeIcon />} />
      <IconItem name="EyeOff" icon={<EyeOffIcon />} />
      <IconItem name="TopTweet" icon={<TopTweetIcon />} />
    </IconGrid>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-8 p-4">
      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold">Small (16px)</h3>
        <div className="flex gap-4 items-center">
          <HomeIconDefault width={16} height={16} />
          <SearchIcon width={16} height={16} />
          <LikeIcon width={16} height={16} />
          <CommentIcon width={16} height={16} />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold">Default (24px)</h3>
        <div className="flex gap-4 items-center">
          <HomeIconDefault width={24} height={24} />
          <SearchIcon width={24} height={24} />
          <LikeIcon width={24} height={24} />
          <CommentIcon width={24} height={24} />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold">Large (32px)</h3>
        <div className="flex gap-4 items-center">
          <HomeIconDefault width={32} height={32} />
          <SearchIcon width={32} height={32} />
          <LikeIcon width={32} height={32} />
          <CommentIcon width={32} height={32} />
        </div>
      </div>
    </div>
  ),
};
