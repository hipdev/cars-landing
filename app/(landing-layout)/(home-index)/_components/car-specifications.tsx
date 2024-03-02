import BlockList from '@/components/design-system/block-list';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import CarAllSpecs from './car-all-specs';
import { charging, exterior, interior, performance } from '../_lib/mocked-data';

export default function CarSpecifications() {
  return (
    <section className='px-20 pb-16'>
      <h3 className='mb-8 text-4xl'>Specifications</h3>
      <div className='flex justify-between gap-28'>
        <BlockList list={exterior} title='Exterior' />

        <div className='w-full'>
          <BlockList list={interior} title='Interior' />
          <Button
            variant='link'
            className='gap-2 p-0 font-normal text-secondary'
          >
            Show more <ArrowRight size={16} />
          </Button>
        </div>

        <div className='w-full'>
          <div className='flex flex-col gap-10'>
            <BlockList list={performance} title='Performance' />
            <BlockList list={charging} title='Charging' />
          </div>
          <Button
            variant='link'
            className='gap-2 p-0 font-normal text-secondary underline hover:text-secondary/70'
          >
            Show more
          </Button>
        </div>
      </div>

      <div className='mt-10 flex justify-center'>
        {/* Simulate Modal using a client wrapper with server components inside */}

        <CarAllSpecs>
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
        </CarAllSpecs>
      </div>
    </section>
  );
}
