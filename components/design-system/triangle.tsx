import { cn } from '@/lib/utils';

type Props = {
  className?: string;
};

/**
 * The above type defines a Props interface with an optional className property of type string for a
 * React component named Triangle.
 * @property {string} className - The `Triangle` component accepts a prop called `className`, which is
 * an optional string type. This prop is used to specify the CSS class name that can be applied to the
 * `Triangle` component.
 */
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
