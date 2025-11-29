import type { Meta, StoryObj } from '@storybook/react-vite';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '~/components/tabs';

const meta = {
  component: Tabs,
  title: 'Tabs',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Tabs>;
export default meta;

type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  render: () => (
    <Tabs defaultValue="tab1" className="w-96">
      <TabsList className="w-full">
        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        <TabsTrigger value="tab3">Tab 3</TabsTrigger>
      </TabsList>

      <TabsContent value="tab1" className="p-4">
        <p>This is content for Tab 1</p>
      </TabsContent>
      <TabsContent value="tab2" className="p-4">
        <p>This is content for Tab 2</p>
      </TabsContent>
      <TabsContent value="tab3" className="p-4">
        <p>This is content for Tab 3</p>
      </TabsContent>
    </Tabs>
  ),
};

export const TwoTabs: Story = {
  render: () => (
    <Tabs defaultValue="posts" className="w-96">
      <TabsList className="w-full">
        <TabsTrigger value="posts">Posts</TabsTrigger>
        <TabsTrigger value="replies">Replies</TabsTrigger>
      </TabsList>
      <TabsContent value="posts" className="p-4">
        <div className="space-y-2">
          <p>Post 1: This is the first post</p>
          <p>Post 2: This is the second post</p>
          <p>Post 3: This is the third post</p>
        </div>
      </TabsContent>
      <TabsContent value="replies" className="p-4">
        <div className="space-y-2">
          <p>Reply 1: This is the first reply</p>
          <p>Reply 2: This is the second reply</p>
        </div>
      </TabsContent>
    </Tabs>
  ),
};

export const ManyTabs: Story = {
  render: () => (
    <Tabs defaultValue="tab1" className="w-2xl">
      <TabsList className="w-full">
        <TabsTrigger value="tab1">Home</TabsTrigger>
        <TabsTrigger value="tab2">Explore</TabsTrigger>
        <TabsTrigger value="tab3">Notifications</TabsTrigger>
        <TabsTrigger value="tab4">Messages</TabsTrigger>
        <TabsTrigger value="tab5">Bookmarks</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1" className="p-4">
        <p>Content for Home</p>
      </TabsContent>
      <TabsContent value="tab2" className="p-4">
        <p>Content for Explore</p>
      </TabsContent>
      <TabsContent value="tab3" className="p-4">
        <p>Content for Notifications</p>
      </TabsContent>
      <TabsContent value="tab4" className="p-4">
        <p>Content for Messages</p>
      </TabsContent>
      <TabsContent value="tab5" className="p-4">
        <p>Content for Bookmarks</p>
      </TabsContent>
    </Tabs>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <Tabs defaultValue="home" className="w-96">
      <TabsList className="w-full">
        <TabsTrigger value="home">
          <span role="img" aria-label="home">
            🏠
          </span>
          <span>Home</span>
        </TabsTrigger>
        <TabsTrigger value="search">
          <span role="img" aria-label="search">
            🔍
          </span>
          <span>Search</span>
        </TabsTrigger>
        <TabsTrigger value="profile">
          <span role="img" aria-label="profile">
            👤
          </span>
          <span>Profile</span>
        </TabsTrigger>
      </TabsList>

      <TabsContent value="home" className="p-4">
        <p>Home Page</p>
      </TabsContent>

      <TabsContent value="search" className="p-4">
        <p>Search Page</p>
      </TabsContent>

      <TabsContent value="profile" className="p-4">
        <p>Profile Page</p>
      </TabsContent>
    </Tabs>
  ),
};

export const WithRichContent: Story = {
  render: () => (
    <Tabs defaultValue="overview" className="w-full max-w-2xl">
      <TabsList className="w-full">
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="details">Details</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>

      <TabsContent value="overview" className="p-4">
        <div className="space-y-4">
          <h3 className="text-lg font-bold">Overview</h3>
          <p>This is a summary of important information.</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
        </div>
      </TabsContent>

      <TabsContent value="details" className="p-4">
        <div className="space-y-4">
          <h3 className="text-lg font-bold">Details</h3>
          <p>More detailed information.</p>
        </div>
      </TabsContent>

      <TabsContent value="settings" className="p-4">
        <div className="space-y-4">
          <h3 className="text-lg font-bold">Settings</h3>
          <p>Settings and configuration.</p>
        </div>
      </TabsContent>
    </Tabs>
  ),
};
