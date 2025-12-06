import "./globals.css";
import React, { ReactNode } from "react";
import Link from "next/link";
import Navbar from './component/Navbar';

export const metadata = {
  title: 'Astra Homes | Interior Design, Construction & Properties for Sale',
  description:
    'Astra Homes is a full-service interior design and construction company delivering bespoke homes, offices, and premium properties across India.',
  keywords:
    'Astra Homes, interior design, home interiors, construction company, property for sale, villas, apartments, turnkey projects, Bangalore, Chennai',
  openGraph: {
    title: 'Astra Homes | Design. Build. Live.',
    description:
      'Design-led construction & interior design firm creating elegant living and commercial spaces.',
    url: 'https://www.astrahomes.in',
    siteName: 'Astra Homes',
    images: [
      {
        url: '/images/home-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Astra Homes – Modern Living Space',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Astra Homes | Design. Build. Live.',
    description:
      'Interior Design | Construction | Properties for Sale – Astra Homes India.',
    images: ['/images/home-hero.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
  },
};


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-beige text-charcoal font-body">
        {/* ---------- Header / Navbar ---------- */}
        <Navbar />
        {/* ---------- Page Content ---------- */}
        <main className="min-h-[80vh]">{children}</main>

        {/* ---------- Footer ---------- */}
        <footer>
          <p>© {new Date().getFullYear()} Astra Homes. All rights reserved.</p>
          <p className="text-sm mt-2">
            Design | Build | Live – crafted with <span className="text-gold"> excellence</span>.
          </p>
        </footer>
      </body>
    </html>
  );
}
