'use client';
import { useState, useEffect } from 'react';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import Image from 'next/image';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel';
import { cn } from '@/lib/utils';

import { vehicleColors } from '../_lib/mocked-data';

export function CarCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const { push } = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const carColor = searchParams.get('carColor') || vehicleColors[0].label;

  useEffect(() => {
    if (api) {
      const selectListener = () => {
        const params = new URLSearchParams(searchParams);
        params.set('carColor', vehicleColors[api.selectedScrollSnap()].label);
        push(`${pathname}?${params.toString()}`);
      };
      api.on('select', selectListener);
      return () => {
        api.off('select', selectListener);
      };
    }
  }, [api, pathname, push, searchParams]);

  useEffect(() => {
    if (api) {
      const index = vehicleColors.findIndex(
        (vehicle) => vehicle.label === carColor,
      );
      if (index !== -1) {
        console.log(index);
        api.scrollTo(index);
      }
    }
  }, [api, carColor]);

  const handleCarClick = (colorLabel: string) => {
    const params = new URLSearchParams(searchParams);
    params.set('carColor', colorLabel);
    push(`${pathname}?${params.toString()}`);
  };

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
        <CarouselPrevious className='bg-ligh-blue/30 h-[37px] w-[37px] border-none text-2xl text-secondary' />
        <CarouselNext className='bg-ligh-blue/30 h-[37px] w-[37px] border-none text-2xl text-secondary' />
      </Carousel>

      <div className='mt-16 flex justify-center gap-4'>
        {vehicleColors.map((vehicle) => (
          <button
            type='button'
            onClick={() => handleCarClick(vehicle.label)}
            key={vehicle.label}
            className='h-[72px] w-[72px]'
          >
            <Image
              src={vehicle.picture}
              alt={vehicle.label}
              width={72}
              height={72}
              className={cn(
                'h-full w-full rounded-sm object-cover transition-opacity',
                vehicle.label === carColor
                  ? 'ring-ligh-blue opacity-100 ring-1'
                  : 'opacity-40 ring-transparent hover:opacity-80',
              )}
              draggable={false}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
