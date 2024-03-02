'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { vehicleColors } from '../_lib/mocked-data';
import Image from 'next/image';

import { type CarouselApi } from '@/components/ui/carousel';
import { useEffect, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export function CarCarousel() {
  const [api, setApi] = useState<CarouselApi>();

  const searchParams = useSearchParams();
  const { push } = useRouter();
  const pathname = usePathname();
  const carColor = searchParams.get('carColor') || vehicleColors[0].label;

  useEffect(() => {
    if (!api) {
      return;
    }

    api.on('select', () => {
      const params = new URLSearchParams(searchParams);
      params.set('carColor', vehicleColors[api.selectedScrollSnap()].label);
      push(`${pathname}?${params.toString()}`);
    });
  }, [api, pathname, push, searchParams]);

  useEffect(() => {
    if (!api) {
      return;
    }
    const index = vehicleColors.findIndex(
      (vehicle) => vehicle.label === carColor,
    );
    if (index !== -1) {
      api.scrollTo(index);
    }
  }, [carColor, api]);

  return (
    <div className='h-auto flex-1 px-16 pt-20'>
      <Carousel className='h-auto' opts={{}} setApi={setApi}>
        <CarouselContent className='max-h-[387px]'>
          {vehicleColors.map((vehicle) => (
            <CarouselItem key={vehicle.label} className='h-full w-full'>
              <div className='p-1'>
                <Image
                  src={vehicle.picture}
                  alt={vehicle.label}
                  width={500}
                  height={500}
                  className='max-h-[387px] w-full object-contain md:h-[387px]'
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className='bg-ligh-blue/30 h-[37px] w-[37px] border-none text-2xl text-primary' />
        <CarouselNext className='bg-ligh-blue/30 h-[37px] w-[37px] border-none text-2xl text-primary' />
      </Carousel>
    </div>
  );
}
