import { IconProps } from './types';

export const ShareIcon = ({ size = 16, className, ...props }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M13.1034 8.34483V13.5H2V8.34483M7.55172 9.13793V2M7.55172 2L4.37931 5.17241M7.55172 2L10.7241 5.17241"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeLinecap="round"
      />
    </svg>
  );
};

