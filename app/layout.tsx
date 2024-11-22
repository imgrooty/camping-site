
// app/layout.tsx
import { footer } from 'framer-motion/client';
import './globals.css';
import Header from '@/components/header';
import Footer from '@/components/footer';
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Providers } from './providers';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (

    <html lang="en">
      <body>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}