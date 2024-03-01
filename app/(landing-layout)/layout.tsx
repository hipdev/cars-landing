import type { Metadata } from 'next';
import LandingHeader from './_components/landing-header';

export const metadata: Metadata = {
  title: 'EVFY - Landing Page',
  description: '2021 Tesla Model 3',
};

export default function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className='bg-soft-gray'>
      <LandingHeader />
      {children}
    </main>
  );
}
