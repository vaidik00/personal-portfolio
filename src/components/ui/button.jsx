import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import { cn } from '../../lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer',
  {
    variants: {
      variant: {
        default:
          'bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] text-white shadow-lg hover:shadow-[0_10px_40px_var(--color-primary-glow)] hover:-translate-y-0.5 hover:scale-[1.02] active:scale-[0.98]',
        outline:
          'border border-white/15 bg-transparent text-[var(--color-text-secondary)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] hover:-translate-y-0.5 hover:shadow-[0_10px_30px_var(--color-primary-glow)]',
        ghost:
          'bg-transparent hover:bg-white/5 text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]',
        secondary:
          'bg-white/5 border border-white/8 text-[var(--color-text-primary)] hover:bg-white/10 hover:-translate-y-0.5',
        destructive:
          'bg-red-500/90 text-white hover:bg-red-500 hover:-translate-y-0.5',
        link: 'text-[var(--color-primary)] underline-offset-4 hover:underline p-0 h-auto',
      },
      size: {
        default: 'h-11 px-6 py-2.5',
        sm: 'h-9 px-4 py-2 text-xs',
        lg: 'h-13 px-8 py-3 text-base',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
