import Logo from "@/components/design-system/logo";
import type { Metadata } from "next";
import { LandingNavigation } from "./_components/landing-navigation";
import Link from "next/link";
import SiteSelector from "./_components/site-selector";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

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
            <div className="flex items-center gap-2.5">
              <SiteSelector />
              <Link
                href="/"
                className={cn(
                  buttonVariants({ variant: "ghost" }),
                  "text-base font-semibold"
                )}
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
