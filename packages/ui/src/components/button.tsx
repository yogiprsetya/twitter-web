import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../lib/utils';

const buttonVariants = cva(
  cn([
    'flex items-center justify-center gap-2 shrink-0 [&_svg]:shrink-0',
    'disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none',
    'whitespace-nowrap rounded-full font-bold transition-all outline-none',
  ]),
  {
    variants: {
      variant: {
        primary: 'bg-primary-blue border-primary-blue text-white',
        secondary: 'bg-white border-primary-blue text-primary-blue',
      },
      size: {
        sm: 'h-8 text-[14px]/[16px] px-4 has-[>svg]:px-2.5',
        big: 'h-12 text-[15px]/[18px] px-8',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'sm',
    },
  },
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
