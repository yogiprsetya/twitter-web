import { Searchbar } from '~/components/searchbar';
import { Trending } from '~/components/trending';
import { WhoToFollow } from '~/components/who-to-follow';
import { BackArrowIcon } from '@twitter-web/ui';
import { ProfileInfo } from './profile-info';
import { Feeds } from './feeds';

type Params = {
  params: Promise<{ username: string }>;
};

const ProfilePage = async ({ params }: Params) => {
  const { username } = await params;

  return (
    <div className="flex gap-8 w-full">
      <div className="border-x w-[600px]">
        <nav className="p-4 flex items-center gap-6">
          <button type="button" aria-label="Back to prev screen">
            <BackArrowIcon className="text-primary-blue" />
          </button>

          <div>
            <h1 className="font-bold text-lg leading-none">{username}</h1>
            <small className="text-dark-6">9 Tweets</small>
          </div>
        </nav>

        <ProfileInfo username={username} />
        <Feeds />
      </div>

      <div className="pt-3 flex flex-col gap-4 grow">
        <Searchbar />
        <WhoToFollow title="You might like" />
        <Trending />
      </div>
    </div>
  );
};

export default ProfilePage;
