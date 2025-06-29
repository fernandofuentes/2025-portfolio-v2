import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
});

export const metadata: Metadata = {
  title: 'Fernando Fuentes - Creative Designer | Portfolio',
  description: 'Creative designer with 15+ years of experience in graphic design and UI/UX. Helping brands shine through powerful visuals and clean user interfaces.',
  keywords: ['graphic design', 'UI/UX design', 'creative designer', 'portfolio', 'Fernando Fuentes'],
  authors: [{ name: 'Fernando Fuentes' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'Fernando Fuentes - Creative Designer',
    description: 'Creative designer with 15+ years of experience in graphic design and UI/UX.',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://images.pexels.com" />
        <link rel="dns-prefetch" href="https://images.pexels.com" />
        
        {/* Preload critical resources */}
        <link
          rel="preload"
          href="/images/hero/fernando-fuentes-3.png"
          as="image"
          type="image/png"
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
        <SpeedInsights/>
        <Analytics/>
      </body>
    </html>
  );
}