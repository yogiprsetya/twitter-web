'use client';

import * as React from 'react';
import { Input } from './input';
import { cn } from '../lib/utils';
import { EyeIcon, EyeOffIcon } from '../icons';

interface InputPasswordProps
  extends Omit<React.ComponentProps<'input'>, 'type'> {
  className?: string;
}

function InputPassword({ className, ...props }: InputPasswordProps) {
  const [showPassword, setShowPassword] = React.useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className={cn('relative', className)}>
      <Input
        type={showPassword ? 'text' : 'password'}
        className="pr-12 w-full"
        {...props}
      />
      <button
        type="button"
        onClick={togglePasswordVisibility}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-dark-6 hover:text-dark-5 transition-colors focus:outline-none focus:text-primary-blue"
        aria-label={showPassword ? 'Hide password' : 'Show password'}
      >
        {showPassword ? (
          <EyeIcon className="size-5" />
        ) : (
          <EyeOffIcon className="size-5" />
        )}
      </button>
    </div>
  );
}

export { InputPassword };
