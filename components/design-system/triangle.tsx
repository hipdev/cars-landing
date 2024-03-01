import { cn } from '@/lib/utils';

type Props = {
  className?: string;
};

export default function Triangle({ className }: Props) {
  return (
    <div
      className={cn(
        'ml-3 h-0 w-0 border-l-[5px] border-r-[5px] border-t-[5px] border-l-transparent border-r-transparent border-t-foreground/80',
        className,
      )}
    />
  );
}
