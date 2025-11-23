import { NAVIGATION_MENU } from '@twitter-web/ui';

export const Navigation = () => {
  return (
    <div className="fixed bottom-0 w-full z-10 bg-black">
      <nav className="flex justify-between items-center gap-2 h-16 px-6">
        {NAVIGATION_MENU.map((v) => (
          <a
            key={v.link}
            href={v.link}
            className="size-6 flex justify-between items-center"
            aria-label={v.label}
          >
            {v.icon.default}
          </a>
        ))}
      </nav>
    </div>
  );
};
