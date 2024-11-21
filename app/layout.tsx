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
    <html lang='en'> 
    
      <body className='bg-[#E8F3D6]'  object-fit='cover flex flex-col min-h-screen justify-between' >
      <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}