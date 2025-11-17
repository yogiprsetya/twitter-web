import { Avatar, AvatarImage, AvatarFallback, Button } from '@twitter-web/ui';

export const TweetCompose = () => {
  return (
    <div className="py-2 px-4 flex items-start gap-3">
      <Avatar className="size-12">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>YP</AvatarFallback>
      </Avatar>

      <div className="flex flex-col">
        <div className="dark:text-dark-6 font-medium">What’s happening?</div>

        <div className="flex items-center justify-between">
          <Button>Tweet</Button>
        </div>
      </div>
    </div>
  );
};
