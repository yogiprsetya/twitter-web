'use client';

import {
  Avatar,
  AvatarImage,
  AvatarFallback,
  Button,
  MediaIcon,
  GIFIcon,
  PollIcon,
  EmojiIcon,
  ScheduleIcon,
} from '@twitter-web/ui';
import { useState } from 'react';

export const TweetCompose = () => {
  const [isWritting, setisWritting] = useState(false);
  const [tweetText, setTweetText] = useState('');

  return (
    <div className="py-3 px-4 flex items-start gap-3 border-y w-full">
      <Avatar className="size-12">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>YP</AvatarFallback>
      </Avatar>

      <div className="flex flex-col gap-4 grow">
        <textarea
          onFocus={() => setisWritting(true)}
          onBlur={() => {
            if (!tweetText) {
              setisWritting(false);
            }
          }}
          rows={isWritting ? 3 : 2}
          onChange={(e) => setTweetText(e.target.value)}
          placeholder="What’s happening?"
          className="dark:text-dark-6 font-medium pt-1 resize-none outline-none"
        />

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 [&_svg]:size-6 [&_svg]:text-primary-blue">
            <label className="inline-block">
              <MediaIcon />
              <input type="file" className="hidden" aria-hidden />
            </label>

            <button className="inline-block">
              <GIFIcon />
            </button>

            <button className="inline-block">
              <PollIcon />
            </button>

            <button className="inline-block">
              <EmojiIcon />
            </button>

            <button className="inline-block">
              <ScheduleIcon />
            </button>
          </div>

          <Button>Tweet</Button>
        </div>
      </div>
    </div>
  );
};
