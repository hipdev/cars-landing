import Logo from '@/components/design-system/logo';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { LandingNavigation } from './landing-navigation';
import SiteSelector from './site-selector';

export default function LandingHeader() {
  return (
    <header className='bg-white px-10 py-3 xl:px-0'>
      <div className='mx-auto max-w-5xl'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-2'>
            <Logo />
            <LandingNavigation />
          </div>
          <div className='flex items-center gap-2.5'>
            <SiteSelector />
            <Link
              href='/'
              className={cn(
                buttonVariants({ variant: 'ghost' }),
                'text-base font-semibold',
              )}
            >
              Log In / Sign Up
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
