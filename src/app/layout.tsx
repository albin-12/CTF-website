import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import RevealObserver from "@/components/RevealObserver";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";

const font = Outfit({ subsets: ["latin"], variable: "--font-sans", weight: ["300", "400", "500", "600"] });

export const metadata: Metadata = {
  title: "CTF — Create the Future",
  description: "CTF designs and builds intelligent machines: robotics, AI and autonomous systems for a smarter, safer India.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={font.variable}>
      <body className="bg-[#050505] text-[#f3f4f6] selection:bg-[#10b981]/30 selection:text-[#ffffff]">
        <SmoothScroll>
          {children}
        </SmoothScroll>
        <CustomCursor />
        <RevealObserver />
      </body>
    </html>
  );
}
