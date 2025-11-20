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
        <div className="bg-dark-7 w-full h-48 mb-2"></div>

        <div className="px-4">
          <div className="flex justify-end">
            <Avatar className="size-[139px] border-4 border-dark-1 absolute -bottom-4 left-4">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>YP</AvatarFallback>
            </Avatar>

            <div className="flex">
              <Button variant="secondary">Edit Profile</Button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 px-4 pb-4">
        <h1 className="text-xl font-bold leading-4">Davide Biscuso</h1>
        <p
          className="font-medium text-dark-6"
          dangerouslySetInnerHTML={{ __html: decodeURIComponent(username) }}
        />

        <article className="font-medium my-2">Product Designer</article>

        <div className="flex items-center gap-4 text-dark-6 font-medium mb-2">
          <div className="flex items-center gap-1">
            <LocationIcon className="size-4" />
            <span>London</span>
          </div>

          <div className="flex items-center gap-1">
            <CalendarIcon className="size-4" />
            <span>Joined September 2011</span>
          </div>
        </div>

        <div className="flex items-center gap-4 font-medium">
          <div className="flex items-center gap-1">
            <span className="font-bold">569</span>
            <span className="text-dark-6">Following</span>
          </div>

          <div className="flex items-center gap-1">
            <span className="font-bold">59</span>
            <span className="text-dark-6">Followers</span>
          </div>
        </div>
      </div>
    </>
  );
};
