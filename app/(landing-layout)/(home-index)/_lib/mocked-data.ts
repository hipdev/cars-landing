type SpecificationType = {
  feature: string;
  value: string;
};

type VehicleDetail = {
  label: string;
  icon: string;
};

type VehicleColor = {
  color: string;
  label: string;
  picture: string;
};

export const exterior: SpecificationType[] = [
  { feature: 'Body Style', value: 'Hatchback' },
  { feature: 'Exterior Colour', value: 'Blue' },
  { feature: 'Length', value: '175”' },
  { feature: 'Wheelbase', value: '106”' },
  { feature: 'Width', value: '69.7”' },
  { feature: 'Full Width', value: 'N/A' },
  { feature: 'Clearance', value: '6”' },
];

export const interior: SpecificationType[] = [
  { feature: 'Seating', value: '5 adults' },
  { feature: 'Interior Colour', value: 'N/A' },
  { feature: 'Head Room Front', value: '41”' },
  { feature: 'Head Room Rear', value: '37”' },
  { feature: 'Leg Room Front', value: '42”' },
  { feature: 'Leg Room Rear', value: '33”' },
  { feature: 'Shoulder Room Front', value: '54”' },
];

export const performance: SpecificationType[] = [
  { feature: 'Horsepower', value: '107 hp' },
  { feature: 'MPGe', value: '102' },
  { feature: 'Top Speed', value: '90 mph' },
];

export const charging: SpecificationType[] = [
  { feature: 'Electric Range', value: '73 Mi.' },
  { feature: 'Battery Size', value: '24 kWh' },
  { feature: 'Cost to charge', value: '$2.50' },
];

export const vehicleDetails: VehicleDetail[] = [
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

export const vehicleColors: VehicleColor[] = [
  {
    color: 'bg-black border-black',
    label: 'Black',
    picture: '/landing/black-car.webp',
  },
  {
    color: 'bg-red-500 border-red-500',
    label: 'Red',
    picture: '/landing/red-car.webp',
  },
  {
    color: 'bg-secondary border-secondary',
    label: 'Blue',
    picture: '/landing/blue-car.webp',
  },
  {
    color: 'bg-white border-zinc-200',
    label: 'Silver',
    picture: '/landing/white-car.png',
  },
];
