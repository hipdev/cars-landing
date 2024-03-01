'use client';

import BlockList from '@/components/design-system/block-list';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from '@/components/ui/dialog';
import { charging, exterior, interior, performance } from '../_lib/mock-specs';

export default function CarAllSpecs() {
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
          <div className='flex justify-between gap-28'>
            <div className='flex flex-col gap-10'>
              <BlockList list={exterior} title='Exterior' />
              <BlockList list={exterior} title='Another one' />
            </div>

            <div className='flex w-full flex-col gap-10'>
              <BlockList list={interior} title='Interior' />
              <BlockList list={interior} title='Another one' />
            </div>

            <div className='w-full'>
              <div className='flex flex-col gap-10'>
                <BlockList list={performance} title='Performance' />
                <BlockList list={charging} title='Charging' />
                <BlockList list={charging} title='Another' />
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
