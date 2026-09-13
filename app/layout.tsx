import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import Header from "@/components/Header";
import "./globals.css";

// FilmGrain disabled — last values: intensity={0.62} opacity={0.15}. Re-add <FilmGrain /> below body's children on request.

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Mano Balan — Portfolio",
  description:
    "Mano Balan — MSc Digital Design (Immersive Mixed Reality), Brunel University London. VR/XR experiences, 3D design, and immersive interactive systems.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${jetbrainsMono.variable} h-full`}>
      <body className="min-h-full bg-black text-white antialiased">
        <Header />
        {children}
      </body>
    </html>
  );
}
