import { Tabs, TabsList, TabsTrigger, TabsContent } from '@twitter-web/ui';
import { TweetCard } from '~/components/tweet-card';

export const Feeds = () => {
  return (
    <Tabs defaultValue="tweets" className="w-full">
      <TabsList className="justify-between w-full border-b">
        <TabsTrigger value="tweets">Tweets</TabsTrigger>
        <TabsTrigger value="replies">Tweets & replies</TabsTrigger>
        <TabsTrigger value="media">Media</TabsTrigger>
        <TabsTrigger value="likes">Likes</TabsTrigger>
      </TabsList>

      <TabsContent value="tweets" className="p-4">
        <TweetCard />
      </TabsContent>

      <TabsContent value="replies" className="p-4">
        <TweetCard />
      </TabsContent>
    </Tabs>
  );
};
