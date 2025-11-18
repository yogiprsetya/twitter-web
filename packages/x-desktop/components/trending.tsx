import { EllipsesIcon } from '@twitter-web/ui';

export const Trending = () => {
  return (
    <div className="rounded-2xl bg-dark-2 overflow-hidden">
      <header className="px-4 py-3 border-b">
        <h2 className="font-bold text-xl">What’s happening</h2>
      </header>

      <div className="flex flex-col px-4">
        <div className="flex justify-between py-3">
          <div>
            <small className="text-dark-6">Trending in Indonesia</small>
            <p className="font-bold text-sm">Ahli Gizi</p>
            <small className="text-dark-6">3,500 posts</small>
          </div>

          <button className="group mt-1 overflow-hidden rounded-full flex justify-center items-center hover:bg-black size-6">
            <EllipsesIcon className="size-6 group-hover:text-primary-blue" />
          </button>
        </div>
      </div>
    </div>
  );
};
