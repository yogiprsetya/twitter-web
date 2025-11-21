import * as React from 'react';
import { cn } from '../lib/utils';

function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        'px-4 py-3 bg-transparent border border-dark-4 rounded-lg focus:outline-none focus:border-primary-blue focus:ring-1 focus:ring-primary-blue',
        className,
      )}
      {...props}
    />
  );
}

export { Input };
