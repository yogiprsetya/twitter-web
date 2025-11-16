import { IconProps } from './types';

export interface DiscoverIconProps extends IconProps {
  selected?: boolean;
}

export const DiscoverIcon = ({ size = 24, selected = false, className, ...props }: DiscoverIconProps) => {
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
          d="M2.90918 7.45455H21.091M2.90918 15.6364H21.091M7.90918 2L7.00009 21.5455M16.5455 2.45455L15.6365 22"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      ) : (
        <path
          d="M2.90918 7.45455H21.091M2.90918 15.6364H21.091M7.90918 2L7.00009 21.5455M16.5455 2.45455L15.6365 22"
          stroke="currentColor"
          strokeLinecap="round"
        />
      )}
    </svg>
  );
};

