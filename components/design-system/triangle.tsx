import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};

export default function Triangle({ className }: Props) {
  return (
    <div
      className={cn(
        "w-0 h-0 ml-3 border-l-[5px] border-l-transparent border-t-[5px] border-t-foreground/80 border-r-[5px] border-r-transparent",
        className
      )}
    />
  );
}
