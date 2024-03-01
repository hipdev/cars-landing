import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "EVFY - Landing Page",
  description: "2021 Tesla Model 3",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main>{children}</main>;
}
