import { TopTweetIcon } from '@twitter-web/ui';
import { TweetCompose } from '~/components/tweet-compose';

export default function Feed() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.tailwind file.
   */
  return (
    <div className="flex gap-8">
      <div className="border-x w-[600px]">
        <nav className="p-4 flex items-center justify-between">
          <h1>Feed</h1>
          <TopTweetIcon className="size-6 text-primary-blue" />
        </nav>

        <TweetCompose />

        <div className="h-2 bg-dark-2 border-b" />
      </div>
    </div>
  );
}
