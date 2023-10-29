import type { Metadata } from 'next'
import { Inter, Lexend } from 'next/font/google'
import './globals.css'

const inter = Lexend({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Vento',
  description: 'Expert HVAC Design for a Comfortable and Sustainable Home',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
