import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { personalDetails } from "@/lib/data";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `${personalDetails.name} Portfolio`,
  description: `${personalDetails.name} Portfolio`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`min-h-screen 2xl:max-w-7xl mx-auto w-full p-4 md:p-8 text-neutral-600 text-sm bg-neutral-100  flex flex-col  ${inter.className}}`}
      >
        {children}
      </body>
    </html>
  );
}
