import Logo from "@/components/design-system/logo";
import type { Metadata } from "next";
import { LandingNavigation } from "./_components/landing-navigation";
import Link from "next/link";

export const metadata: Metadata = {
  title: "EVFY - Landing Page",
  description: "2021 Tesla Model 3",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="bg-soft-gray">
      <header className="bg-white py-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Logo />
              <LandingNavigation />
            </div>
            <div>
              <Link
                href="/"
                type="button"
                className="font-semibold hover:text-black transition-colors hover:bg-accent hover:border-black/10 border px-3 py-2 border-transparent rounded-md"
              >
                Log In / Sign Up
              </Link>
            </div>
          </div>
        </div>
      </header>
      {children}
    </main>
  );
}
