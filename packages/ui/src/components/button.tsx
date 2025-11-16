import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '~/lib/utils';

const buttonVariants = cva(
  cn([
    'inline-flex items-center justify-center gap-2 shrink-0 [&_svg]:shrink-0',
    'disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none',
    'whitespace-nowrap rounded-full font-bold transition-all outline-none',
  ]),
  {
    variants: {
      variant: {
        default: 'bg-twitter-white-100 border-bg-twitter-white-100',
      },
      size: {
        sm: 'h-8 text-[14px]/[16px] px-4 has-[>svg]:px-2.5',
        xl: 'h-[52px] text-[17px]/[20px] px-8 has-[>svg]:px-4',
      },
    },
    defaultVariants: {
      variant: 'default',
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
