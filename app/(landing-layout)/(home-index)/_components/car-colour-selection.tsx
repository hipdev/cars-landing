'use client';

import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { vehicleColors } from '../_lib/mocked-data';
import { cn } from '@/lib/utils';

export default function CarColourSelection() {
  const searchParams = useSearchParams();
  const { push } = useRouter();
  const pathname = usePathname();

  const carColor = searchParams.get('carColor') || vehicleColors[0].label;

  return (
    <>
      <h4 className='mb-5 font-semibold'>Colour</h4>

      <RadioGroup
        defaultValue={carColor || ''}
        className='flex items-center justify-between'
        onValueChange={(value) => {
          const params = new URLSearchParams(searchParams);
          params.set('carColor', value);
          push(`${pathname}?${params.toString()}`);
        }}
      >
        <div className='flex gap-3.5'>
          {vehicleColors.map((vehicleColor) => (
            <RadioGroupItem
              key={vehicleColor.label}
              value={vehicleColor.label}
              id={vehicleColor.label}
              className={cn(
                'focus:ring-offset-opacity-50 focus:ring-ligh-blue h-7 w-7 focus:ring-1 focus:ring-opacity-50 focus:ring-offset-4  focus:ring-offset-white disabled:cursor-not-allowed disabled:opacity-50',
                vehicleColor.color,
                vehicleColor.label === carColor &&
                  'ring-ligh-blue ring-1 ring-offset-4',
              )}
            />
          ))}
        </div>
        <span className='font-semibold uppercase tracking-[1px]'>
          {vehicleColors.find((vehicleColor) => vehicleColor.label === carColor)
            ?.label || ''}
        </span>
      </RadioGroup>
    </>
  );
}
