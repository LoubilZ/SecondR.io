import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const figtree = Figtree({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Secondr.io | Venture Secondaries & Fundraising",
  description: "Expertise en transactions secondaires, fundraising et deal sourcing pour l'écosystème Venture Capital.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${figtree.className} antialiased flex flex-col min-h-screen bg-black`}
      >
        <Navbar />
        <main className="flex-grow pt-20">
            {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
