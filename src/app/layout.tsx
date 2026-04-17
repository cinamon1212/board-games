import type { Metadata } from 'next'
import { Geist, Geist_Mono, Open_Sans } from 'next/font/google'

import { Toast } from '../components/Toast/Toast'
import { Providers } from './providers'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const openSans = Open_Sans({
  variable: '--font-open-sans',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
})

export const metadata: Metadata = {
  title: 'Board Games',
  description: 'Board games statistics',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' href='/favicon.ico' />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${openSans.variable}`}
      >
        <Providers>
          <Toast />
          {children}
        </Providers>
      </body>
    </html>
  )
}
