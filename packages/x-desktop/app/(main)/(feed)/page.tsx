import { TopTweetIcon } from '@twitter-web/ui';
import { Searchbar } from '~/components/searchbar';
import { Trending } from '~/components/trending';
import { TweetCard } from '~/components/tweet-card';
import { TweetCompose } from '~/components/tweet-compose';
import { WhoToFollow } from '~/components/who-to-follow';

export default function Feed() {
  return (
    <div className="flex gap-8 w-full">
      <div className="border-x w-[600px]">
        <nav className="p-4 flex items-center justify-between">
          <h1>Feed</h1>
          <TopTweetIcon className="size-6 text-primary-blue" />
        </nav>

        <TweetCompose />

        <div className="h-2 bg-dark-2 border-b" />

        <div className="p-4">
          <TweetCard />
        </div>
      </div>

      <div className="pt-3 flex flex-col gap-4 grow">
        <Searchbar />
        <Trending />
        <WhoToFollow />
      </div>
    </div>
  );
}
