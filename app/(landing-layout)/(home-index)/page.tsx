import { Suspense } from 'react';
import CarAbout from './_components/car-about';
import { CarCarousel } from './_components/car-carousel';
import CarDetail from './_components/car-detail';
import CarSpecifications from './_components/car-specifications';

export default function Home() {
  return (
    <>
      <section className='relative'>
        {/* Small trick to reprlicate the design with the white background */}
        <div className='absolute right-0 top-0 hidden h-full w-56 bg-white xl:block 2xl:w-96' />

        <div className='mx-auto max-w-7xl'>
          <div className='flex w-full'>
            <Suspense>
              <CarCarousel />
            </Suspense>
            <CarDetail />
          </div>
        </div>
      </section>
      <CarAbout />
      <CarSpecifications />
    </>
  );
}
