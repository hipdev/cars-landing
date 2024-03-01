import BlockList from '@/components/design-system/block-list';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

type SpecificationType = {
  feature: string;
  value: string;
};

const exterior: SpecificationType[] = [
  { feature: 'Body Style', value: 'Hatchback' },
  { feature: 'Exterior Colour', value: 'Blue' },
  { feature: 'Length', value: '175”' },
  { feature: 'Wheelbase', value: '106”' },
  { feature: 'Width', value: '69.7”' },
  { feature: 'Full Width', value: 'N/A' },
  { feature: 'Clearance', value: '6”' },
];

const interior: SpecificationType[] = [
  { feature: 'Seating', value: '5 adults' },
  { feature: 'Interior Colour', value: 'N/A' },
  { feature: 'Head Room Front', value: '41”' },
  { feature: 'Head Room Rear', value: '37”' },
  { feature: 'Leg Room Front', value: '42”' },
  { feature: 'Leg Room Rear', value: '33”' },
  { feature: 'Shoulder Room Front', value: '54”' },
];

const performance: SpecificationType[] = [
  { feature: 'Horsepower', value: '107 hp' },
  { feature: 'MPGe', value: '102' },
  { feature: 'Top Speed', value: '90 mph' },
];

const charging: SpecificationType[] = [
  { feature: 'Electric Range', value: '73 Mi.' },
  { feature: 'Battery Size', value: '24 kWh' },
  { feature: 'Cost to charge', value: '$2.50' },
];
export default function CarSpecifications() {
  return (
    <section className='mx-auto max-w-7xl pb-28 md:px-10'>
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
    </section>
  );
}
