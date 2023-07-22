import './globals.css'
import type { Metadata } from 'next'
import { Josefin_Sans as Sans } from 'next/font/google'
import LibraryProvider from '@context/LibraryProvider'

const sans = Sans({
  subsets: ['latin'],
  variable: '--font-sans'
})

export const metadata: Metadata = {
  title: 'Midu`s Library',
  description: 'This is a test for a library',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={sans.className}>
        <LibraryProvider>
          {children}
        </LibraryProvider>
      </body>
    </html>
  )
}
