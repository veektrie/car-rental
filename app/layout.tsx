import { Footer, NavBar } from '@/components'
import './globals.css'
import { Inter } from 'next/font/google'


export const metadata = {
  title: 'Car Rental',
  description: 'Rent your dream car right here',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='relative'>
        <NavBar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
