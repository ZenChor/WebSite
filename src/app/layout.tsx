import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Landing Page',
  description: 'Social Smart Music Playlist Generator',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
