import { ProfileInfo } from './profile-info';
import { Feeds } from './feeds';
import { Header } from './header';

type Params = {
  params: Promise<{ username: string }>;
};

const ProfilePage = async ({ params }: Params) => {
  const { username } = await params;

  return (
    <div className="w-full max-w-full">
      <Header username={username} />
      <ProfileInfo username={username} />
      <Feeds />
    </div>
  );
};

export default ProfilePage;
