import CarAbout from './_components/car-about';
import CarSpecifications from './_components/car-specifications';

export default function Home() {
  return (
    <div className='min-h-screen'>
      <section className='relative'>
        {/* Small trick to reprlicate the design with the white background */}
        <div className='absolute right-0 top-0 hidden h-full w-56 bg-white xl:block' />

        <div className='mx-auto max-w-7xl'>
          <div className='flex w-full'>
            <div className='flex-1'></div>
            <div className='h-[40rem] w-4/12 bg-white px-6 pt-10'>
              <div>Carrousel</div>
              <div>Features</div>
            </div>
          </div>
        </div>
      </section>
      <CarAbout />
      <CarSpecifications />
    </div>
  );
}
