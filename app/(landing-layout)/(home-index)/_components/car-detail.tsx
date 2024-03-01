import Chip from '@/components/design-system/chip';
import Rating from '@/components/design-system/rating';
import { Separator } from '@/components/ui/separator';
import Image from 'next/image';

export default function CarDetail() {
  return (
    <div className='relative z-10 w-5/12 bg-white px-12 pb-16 pt-10'>
      <Chip>NEW</Chip>
      <h3 className='mb-3 mt-2.5 text-3xl font-semibold'>2021 Tesla Model 3</h3>
      <div className='flex gap-3'>
        <span className='text-primary/40'>VIN</span>
        <span>JN1AZ0CPOBT009448</span>
      </div>

      <div className='mb-7 mt-6'>
        <Rating stars={5} />
      </div>

      <span className='text-2xl font-medium'>$41,103</span>

      <Separator className='my-5' />
    </div>
  );
}
