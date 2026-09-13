import type { Metadata } from "next";
import { Urbanist, Inter, Be_Vietnam_Pro } from "next/font/google";
import Header from "@/components/Header";
import "./globals.css";

// FilmGrain disabled — last values: intensity={0.62} opacity={0.15}. Re-add <FilmGrain /> below body's children on request.

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
  weight: ["300", "400", "600"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400"],
});

const beVietnamPro = Be_Vietnam_Pro({
  variable: "--font-be-vietnam",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Mano Balan — Portfolio",
  description:
    "Mano Balan — MSc Digital Design (Immersive Mixed Reality), Brunel University London. VR/XR experiences, 3D design, and immersive interactive systems.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${urbanist.variable} ${inter.variable} ${beVietnamPro.variable} h-full`}>
      <body className="min-h-full bg-black text-white antialiased">
        <Header />
        {children}
      </body>
    </html>
  );
}
