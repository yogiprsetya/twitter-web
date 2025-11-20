import { Avatar, AvatarImage, AvatarFallback, Button } from '@twitter-web/ui';
import { FC } from 'react';

type Props = {
  title?: string;
};

export const WhoToFollow: FC<Props> = ({ title = 'Who to follow' }) => {
  return (
    <div className="rounded-2xl bg-dark-2 overflow-hidden">
      <header className="px-4 py-3 border-b">
        <h2 className="font-bold text-xl">{title}</h2>
      </header>

      <div className="flex flex-col px-4">
        <div className="flex justify-between py-3">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-4">
              <Avatar className="size-12">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>YP</AvatarFallback>
              </Avatar>

              <div className="flex flex-col justify-center">
                <p className="font-bold leading-3">Bessie Cooper</p>

                <small className="font-medium text-dark-6">
                  @alessandroveronezi
                </small>
              </div>
            </div>

            <Button variant="secondary" size="small">
              Follow
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
