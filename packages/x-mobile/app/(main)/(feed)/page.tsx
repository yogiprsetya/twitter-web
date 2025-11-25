import { TweetCard } from '~/components/tweet-card';

export default function FeedPage() {
  return (
    <div className="w-full max-w-full">
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
