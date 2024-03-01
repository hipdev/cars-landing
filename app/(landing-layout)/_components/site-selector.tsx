'use client';

import { DropdownMenuCheckboxItemProps } from '@radix-ui/react-dropdown-menu';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useState } from 'react';
import Triangle from '@/components/design-system/triangle';
import Image from 'next/image';

type Checked = DropdownMenuCheckboxItemProps['checked'];

const countries = [
  {
    name: 'Singapore',
    flag: '/icons/sg-flag.svg',
  },
  {
    name: 'United States',
    flag: '/icons/us-flag.svg',
  },
  {
    name: 'Australia',
    flag: '/icons/au-flag.svg',
  },
  {
    name: 'Japan',
    flag: '/icons/jp-flag.svg',
  },
];

export default function SiteSelector() {
  //     <DropdownMenuCheckboxItem
  //     checked={showStatusBar}
  //     onCheckedChange={setShowStatusBar}
  //   >
  //     Status Bar
  //   </DropdownMenuCheckboxItem>
  const [position, setPosition] = useState('Singapore');

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className='outline-none'>
        <Button
          variant='ghost'
          className='focus-visible:ring-0 focus-visible:ring-transparent'
        >
          <Image
            src={
              countries.find((country) => country.name === position)?.flag ||
              '/icons/sg-flag.svg'
            }
            alt={`Flag of ${position}`}
            className='h-[18px] w-7 border border-black/30 object-cover'
            width={28}
            height={16}
          />
          <Triangle />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-56'>
        <DropdownMenuLabel>Select country</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          {countries.map((country) => (
            <DropdownMenuRadioItem key={country.name} value={country.name}>
              <div className='flex items-center gap-2'>
                <Image
                  src={country.flag}
                  alt={`Flag of ${country.name}`}
                  className='h-4 w-7 border object-cover shadow-sm'
                  width={28}
                  height={16}
                />
                <span>{country.name}</span>
              </div>
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
