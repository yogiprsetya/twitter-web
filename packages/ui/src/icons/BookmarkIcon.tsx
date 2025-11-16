import { IconProps } from './types';

export interface BookmarkIconProps extends IconProps {
  selected?: boolean;
}

export const BookmarkIcon = ({ size = 24, selected = false, className, ...props }: BookmarkIconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      {selected ? (
        <path
          d="M4 3C4 2.44772 4.44772 2 5 2H20C20.5523 2 21 2.44772 21 3V20.881C21 21.7261 20.0167 22.1902 19.3643 21.6529L13.1357 16.5235C12.7665 16.2194 12.2335 16.2194 11.8643 16.5235L5.63571 21.6529C4.98334 22.1902 4 21.7261 4 20.881V3Z"
          fill="currentColor"
        />
      ) : (
        <path
          d="M5 2.5H20C20.2761 2.5 20.5 2.72386 20.5 3V20.8809C20.5 21.3034 20.0088 21.5351 19.6826 21.2666L13.4531 16.1377C12.8993 15.6818 12.1007 15.6818 11.5469 16.1377L5.31738 21.2666C4.9912 21.5351 4.5 21.3034 4.5 20.8809V3C4.5 2.72386 4.72386 2.5 5 2.5Z"
          stroke="currentColor"
        />
      )}
    </svg>
  );
};

