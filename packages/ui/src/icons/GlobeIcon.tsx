import { IconProps } from './types';

export const GlobeIcon: React.FC<IconProps> = ({ className, ...props }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M8 0C3.58 0 0 3.58 0 8C0 12.42 3.58 16 8 16C12.42 16 16 12.42 16 8C16 3.58 12.42 0 8 0ZM8 14C4.69 14 2 11.31 2 8C2 4.69 4.69 2 8 2C11.31 2 14 4.69 14 8C14 11.31 11.31 14 8 14ZM8 4C6.34 4 5 5.34 5 7C5 8.66 6.34 10 8 10C9.66 10 11 8.66 11 7C11 5.34 9.66 4 8 4ZM8 9C7.17 9 6.5 8.33 6.5 7.5C6.5 6.67 7.17 6 8 6C8.83 6 9.5 6.67 9.5 7.5C9.5 8.33 8.83 9 8 9Z"
        fill="currentColor"
      />
    </svg>
  );
};
