'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from '@/components/ui/dialog';

export default function CarAllSpecs({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant='outline'
            className='h-[62px] border-secondary bg-white px-[3.18rem] text-base font-semibold text-secondary hover:border-primary'
          >
            Show all specifications
          </Button>
        </DialogTrigger>
        <DialogContent className='max-h-[90vh] overflow-auto md:max-w-2xl lg:max-w-6xl'>
          <DialogHeader>
            <h3 className='mb-4 text-4xl'>Specifications</h3>
          </DialogHeader>
          {children}
        </DialogContent>
      </Dialog>
    </>
  );
}
