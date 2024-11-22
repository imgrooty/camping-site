// app/layout.tsx
import { footer } from 'framer-motion/client';
import './globals.css';
import Header from '@/components/header';
import Footer from '@/components/footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang='en' className='h-full'> 
      <body className='bg-[#E8F3D6] min-h-screen flex flex-col'>
        <Header />
        <main className='flex-grow'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}