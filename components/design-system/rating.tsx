import { cn } from '@/lib/utils';
import Image from 'next/image';

type RatingProps = {
  stars: number;
  wrapperClassName?: string;
  starClassName?: string;
};

export default function Rating({
  stars,
  wrapperClassName,
  starClassName,
}: RatingProps) {
  // Ensure stars are within the range of 1 to 5
  const clampedStars = Math.min(Math.max(1, stars), 5);

  // Create an array of stars based on the clamped value
  const starElements = Array(clampedStars)
    .fill(null)
    .map((_, index) => (
      <Image
        key={index}
        width={24}
        height={24}
        src='/icons/star.svg'
        alt='star icon'
        className='h-6 w-6'
      />
    ));

  return (
    <div className={wrapperClassName}>
      <div className={cn('flex gap-2', starClassName)}>{starElements}</div>
    </div>
  );
}
