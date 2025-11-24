import { TweetCard } from '~/components/tweet-card';
import { TweetCompose } from '~/components/tweet-compose';

export default function FeedPage() {
  return (
    <div className="w-full max-w-full">
      <TweetCompose />

      <div className="w-full">
        <TweetCard />
        <TweetCard />
        <TweetCard />
        <TweetCard />
        <TweetCard />
      </div>
    </div>
  );
}
