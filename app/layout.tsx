import type { Metadata } from "next";
import { Poppins, Prata } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin", "latin-ext"],
  variable: "--font-poppins",
  weight: ["400", "500", "600"],
});

/** Prata (Cyreal) — display serif for headings. */
const prata = Prata({
  subsets: ["latin"],
  variable: "--font-prata",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: {
    default: "To Kafe tis Chrysanthis · Menu",
    template: "%s",
  },
  description: "Restaurant menu — To Kafe tis Chrysanthis, Larnaca.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${prata.variable} h-full`}
    >z
      <body className="min-h-dvh bg-zinc-950 text-[#e5e7eb] antialiased">
        {children}
      </body>
    </html>
  );
}
