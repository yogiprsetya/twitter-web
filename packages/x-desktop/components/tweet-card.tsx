import {
  Avatar,
  AvatarImage,
  AvatarFallback,
  EllipsesIcon,
  CommentIcon,
  RetweetIcon,
  LikeIcon,
  ShareIcon,
} from '@twitter-web/ui';

export const TweetCard = () => {
  return (
    <div className="flex items-start gap-3">
      <Avatar className="size-12">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>YP</AvatarFallback>
      </Avatar>

      <div className="flex flex-col grow">
        <header className="flex items-center justify-between mb-2">
          <div className="flex gap-2 items-end">
            <span className="font-bold">Devon Lane</span>
            <span className="font-medium text-dark-5">@johndue</span>
            <span className="text-dark-5">·</span>
            <span className="font-medium text-dark-5">10h</span>
          </div>

          <button type="button">
            <EllipsesIcon />
          </button>
        </header>

        <article className="font-medium mb-4">Tom is in a big hurry.</article>

        <footer className="flex items-center justify-between text-dark-5 font-medium">
          <button type="button" className="flex gap-2 items-center">
            <CommentIcon />
            <span className="text-sm">60</span>
          </button>

          <button type="button" className="flex gap-2 items-center">
            <RetweetIcon />
            <span className="text-sm">12</span>
          </button>

          <button type="button" className="flex gap-2 items-center">
            <LikeIcon />
            <span className="text-sm">45</span>
          </button>

          <button type="button" className="flex gap-2 items-center">
            <ShareIcon />
            <span className="text-sm">2</span>
          </button>
        </footer>
      </div>
    </div>
  );
};
