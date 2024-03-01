import CarFeature from '@/components/design-system/car-feature';
import Image from 'next/image';

type VehicleDetail = {
  label: string;
  icon: string;
};

const vehicleDetails: VehicleDetail[] = [
  {
    label: 'Diesel Fuel',
    icon: '/icons/gas.svg',
  },
  {
    label: 'Automatic Transmission',
    icon: '/icons/transmission.svg',
  },
  {
    label: '11,594 Miles',
    icon: '/icons/speed.svg',
  },
  {
    label: '3.5L Displacement',
    icon: '/icons/displacement.svg',
  },
];

export default function CarAbout() {
  return (
    <section className='mx-auto max-w-7xl pb-28 pt-14 md:px-10'>
      <h3 className='mb-8 text-4xl'>About this car</h3>
      <div className='flex justify-between'>
        {vehicleDetails.map((detail) => (
          <CarFeature
            key={detail.label}
            label={detail.label}
            iconSrc={detail.icon}
          />
        ))}
      </div>
    </section>
  );
}
