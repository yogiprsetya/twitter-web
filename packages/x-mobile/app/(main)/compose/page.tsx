'use client';

import { useRouter } from 'next/navigation';
import {
  BackArrowIcon,
  Avatar,
  AvatarImage,
  AvatarFallback,
  Button,
  MediaIcon,
  GIFIcon,
  PollIcon,
  ScheduleIcon,
  LocationIcon,
  ChevronDownIcon,
  GlobeIcon,
} from '@twitter-web/ui';
import { useState } from 'react';

export default function ComposePage() {
  const router = useRouter();
  const [tweetText, setTweetText] = useState('');
  const [replyVisibility] = useState('Everyone');

  return (
    <div className="min-h-screen bg-white dark:bg-dark-1 pb-0 w-full">
      {/* Header */}
      <header className="sticky top-0 z-20 bg-white dark:bg-dark-1">
        <div className="flex items-center justify-between p-4">
          <button type="button" onClick={() => router.back()} aria-label="Back">
            <BackArrowIcon className="size-6 text-primary-blue" />
          </button>

          <div className="flex items-center gap-4">
            <Button variant="link" size="small" className="text-sm">
              Drafts
            </Button>

            <Button size="small">Post</Button>
          </div>
        </div>
      </header>

      {/* Compose Area */}
      <div className="p-4 flex flex-col gap-4">
        <div className="flex items-start gap-2">
          <Avatar className="size-10 shrink-0">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>YP</AvatarFallback>
          </Avatar>

          <div className="flex flex-col gap-4 grow min-w-0">
            {/* Reply Visibility Selector */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                className="flex items-center gap-1 px-3 py-1 rounded-full border border-dark-7 dark:border-dark-3 text-primary-blue text-sm font-medium hover:bg-dark-7 dark:hover:bg-dark-3 transition-colors"
              >
                <span>{replyVisibility}</span>
                <ChevronDownIcon className="text-primary-blue" />
              </button>
            </div>

            {/* Text Input */}
            <textarea
              value={tweetText}
              onChange={(e) => setTweetText(e.target.value)}
              placeholder="What's happening?"
              rows={5}
              className="w-full font-medium resize-none outline-none bg-transparent text-dark-1 dark:text-white placeholder:text-dark-5"
              autoFocus
            />
          </div>
        </div>

        {/* Reply Visibility Indicator */}
        <div className="flex items-center gap-2 text-primary-blue text-sm">
          <GlobeIcon className="text-primary-blue" />
          <span>Everyone can reply</span>
        </div>

        <div className="h-px bg-dark-7 dark:bg-dark-3"></div>

        {/* Action Icons */}
        <div className="flex items-center gap-4 [&_svg]:size-6 [&_svg]:text-primary-blue">
          <label className="inline-block cursor-pointer">
            <MediaIcon />
            <input type="file" className="hidden" aria-hidden />
          </label>

          <button type="button" className="inline-block">
            <GIFIcon />
          </button>

          <button type="button" className="inline-block">
            <PollIcon />
          </button>

          <button type="button" className="inline-block">
            <ScheduleIcon />
          </button>

          <button type="button" className="inline-block">
            <LocationIcon />
          </button>
        </div>
      </div>
    </div>
  );
}
