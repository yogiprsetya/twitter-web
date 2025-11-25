import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../lib/utils';

const buttonVariants = cva(
  cn([
    'flex items-center justify-center gap-2 shrink-0 [&_svg]:shrink-0',
    'disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none',
    'whitespace-nowrap rounded-full border transition-all outline-none',
    'font-bold text-[15px]/[19px]',
  ]),
  {
    variants: {
      variant: {
        primary: 'bg-primary-blue border-primary-blue text-white',
        secondary: 'bg-transparent border-primary-blue text-primary-blue',
        link: 'bg-transparent border-transparent text-primary-blue font-medium hover:underline h-auto p-0',
      },
      size: {
        small: 'h-[30px] px-3 py-2',
        med: 'h-10 px-4 py-2.5',
        big: 'h-12 px-8 py-[15px]',
      },
    },
    compoundVariants: [
      {
        variant: 'link',
        className: 'h-auto p-0',
      },
    ],
    defaultVariants: {
      variant: 'primary',
      size: 'med',
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
