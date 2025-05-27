import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Rasen Web',
  description: 'Rasen web',
  generator: 'Rasen web',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
