import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

/**
 * The type `Props` in TypeScript React consists of optional properties `href` and `className`.
 * @property {string} href - The `href` property is a string that represents the URL to which the link
 * will navigate when clicked. It is optional, meaning it is not required for the component to
 * function.
 * @property {string} className - The `className` property is used to specify one or more class names
 * for an HTML element. It allows you to apply CSS styles to the element. In React, you can pass the
 * `className` prop to components to style them using CSS classes.
 */
type Props = {
  href?: string;
  className?: string;
};

export default function Logo({ href = '/', className }: Props) {
  return (
    <Link href={href} className={cn('flex items-center gap-1', className)}>
      <Image
        src='/logo-icon.svg'
        alt='EVFY icon'
        width={30}
        height={30}
        className='relative top-1 h-8 w-7'
        priority
        draggable={false}
      />
      <Image
        src='/logo.svg'
        alt='EVFY logo'
        width={30}
        height={30}
        className='h-5 w-28'
        priority
        draggable={false}
      />
    </Link>
  );
}
