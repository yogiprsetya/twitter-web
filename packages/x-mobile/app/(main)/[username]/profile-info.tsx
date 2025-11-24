import {
  Avatar,
  AvatarImage,
  AvatarFallback,
  Button,
  LocationIcon,
  CalendarIcon,
} from '@twitter-web/ui';
import { FC } from 'react';

type Props = {
  username: string;
};

export const ProfileInfo: FC<Props> = ({ username }) => {
  return (
    <>
      <div className="relative">
        <div className="bg-dark-7 w-full h-32 mb-2"></div>

        <div className="px-4">
          <div className="flex justify-end">
            <Avatar className="size-24 border-4 border-white dark:border-dark-1 absolute -bottom-6 left-4">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>YP</AvatarFallback>
            </Avatar>

            <div className="flex mt-2">
              <Button variant="secondary" className="text-sm px-4 py-2">
                Edit Profile
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 px-4 pb-4">
        <h1 className="text-xl font-bold leading-4">Davide Biscuso</h1>

        <p className="font-medium text-dark-6">
          {decodeURIComponent(username)}
        </p>

        <div className="flex flex-col gap-2 text-dark-6 font-medium mb-3">
          <div className="flex items-center gap-1">
            <LocationIcon className="size-4" />
            <span className="text-sm">London</span>
          </div>

          <div className="flex items-center gap-1">
            <CalendarIcon className="size-4" />
            <span className="text-sm">Joined September 2011</span>
          </div>
        </div>

        <div className="flex items-center gap-6 font-medium">
          <div className="flex items-center gap-1">
            <span className="font-bold">569</span>
            <span className="text-dark-6 text-sm">Following</span>
          </div>

          <div className="flex items-center gap-1">
            <span className="font-bold">59</span>
            <span className="text-dark-6 text-sm">Followers</span>
          </div>
        </div>
      </div>
    </>
  );
};
