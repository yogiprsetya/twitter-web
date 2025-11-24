import { Tabs, TabsList, TabsTrigger, TabsContent } from '@twitter-web/ui';
import { TweetCard } from '~/components/tweet-card';

export const Feeds = () => {
  return (
    <Tabs defaultValue="tweets" className="w-full">
      <TabsList className="justify-between w-full border-b border-dark-7 dark:border-dark-3">
        <TabsTrigger value="tweets" className="text-sm">
          Tweets
        </TabsTrigger>

        <TabsTrigger value="replies" className="text-sm">
          Replies
        </TabsTrigger>

        <TabsTrigger value="media" className="text-sm">
          Media
        </TabsTrigger>

        <TabsTrigger value="likes" className="text-sm">
          Likes
        </TabsTrigger>
      </TabsList>

      <TabsContent value="tweets" className="mt-0">
        <TweetCard />
        <TweetCard />
        <TweetCard />
      </TabsContent>

      <TabsContent value="replies" className="mt-0">
        <TweetCard />
        <TweetCard />
      </TabsContent>

      <TabsContent value="media" className="mt-0">
        <TweetCard />
      </TabsContent>

      <TabsContent value="likes" className="mt-0">
        <TweetCard />
        <TweetCard />
      </TabsContent>
    </Tabs>
  );
};
