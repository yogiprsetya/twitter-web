import { SearchIcon } from '@twitter-web/ui';

export const Searchbar = () => {
  return (
    <div className="relative h-10 rounded-full flex items-center gap-4 px-4 bg-dark-3 overflow-hidden">
      <SearchIcon className="size-5" />

      <input
        placeholder="Search Twitter"
        className="h-full grow outline-none font-medium"
      />
    </div>
  );
};
