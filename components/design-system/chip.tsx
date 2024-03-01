import { cn } from '@/lib/utils';

type ChipProps = {
  className?: string;
  children?: React.ReactNode;
};

export default function Chip({ className, children }: ChipProps) {
  return (
    <span
      className={cn(
        'bg-ligh-blue/40 inline-flex items-center justify-center rounded-full px-3 py-1 text-xs font-semibold text-secondary',
        className,
      )}
    >
      {children}
    </span>
  );
}
