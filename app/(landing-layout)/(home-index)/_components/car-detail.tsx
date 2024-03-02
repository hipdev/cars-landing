import Chip from '@/components/design-system/chip';
import Rating from '@/components/design-system/rating';
import { Separator } from '@/components/ui/separator';
import CarColourSelection from './car-colour-selection';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { CarDetailAccordion } from './car-detail-accordion';

export default function CarDetail() {
  return (
    <div className='relative z-10 w-5/12 max-w-[499px] bg-white px-12 pb-16 pt-14'>
      <Chip>NEW</Chip>

      <h3 className='mb-3 mt-2.5 text-3xl font-semibold'>2021 Tesla Model 3</h3>

      <div className='flex gap-3'>
        <span className='text-primary/40'>VIN</span>
        <span>JN1AZ0CPOBT009448</span>
      </div>

      <div className='mb-7 mt-5'>
        <Rating stars={5} />
      </div>

      <span className='flex items-center text-2xl font-medium'>
        <span className='text-[22px]'>$</span>41,103
      </span>

      <Separator className='my-5' />

      <CarColourSelection />

      <Button
        variant={'secondary'}
        className='text-ligh-blue mt-16 w-full py-[1.94rem] text-base font-semibold'
      >
        Order Now
      </Button>

      <p className='mb-14 mt-7 text-center tracking-[0.15px] text-primary/40'>
        Estimated within 16 Aug – 23 Aug
      </p>

      <h5 className='text-2xl font-medium leading-9'>
        Tesla believes in accelerating the world&apos;s transition to
        sustainable energy with electric cars.
      </h5>

      <Link
        href='/'
        className='mt-5 block text-xl text-secondary underline transition-colors hover:text-secondary/70'
      >
        View the Tesla collection
      </Link>

      <Separator className='mb-8 mt-14' />

      <CarDetailAccordion />
    </div>
  );
}
