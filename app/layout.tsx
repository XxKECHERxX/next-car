import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import { Roboto } from 'next/font/google'


export const metadata: Metadata = {
  title: 'NextCar',
}

const roboto = Roboto({
  subsets: ['latin'],
  weight: '400'
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
          <Navigation />
          {children}
      </body>
    </html>
  )
}

