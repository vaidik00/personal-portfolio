import * as React from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '../../lib/utils';

const badgeVariants = cva(
  'inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold tracking-wide transition-all duration-200 select-none',
  {
    variants: {
      variant: {
        default:
          'bg-[var(--color-primary)]/12 text-[var(--color-primary)] border border-[var(--color-primary)]/20 hover:bg-[var(--color-primary)]/20',
        secondary:
          'bg-white/6 text-[var(--color-text-secondary)] border border-white/8 hover:bg-white/10',
        success:
          'bg-emerald-500/12 text-emerald-400 border border-emerald-500/20',
        cyan:
          'bg-cyan-500/12 text-cyan-400 border border-cyan-500/20',
        purple:
          'bg-purple-500/12 text-purple-400 border border-purple-500/20',
        outline:
          'border border-[var(--color-primary)]/30 text-[var(--color-primary)] bg-transparent',
      },
    },
    defaultVariants: { variant: 'default' },
  }
);

const Badge = React.forwardRef(({ className, variant, ...props }, ref) => (
  <span ref={ref} className={cn(badgeVariants({ variant }), className)} {...props} />
));
Badge.displayName = 'Badge';

export { Badge, badgeVariants };
