import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AvicenaPlus - Vaš pouzdan zdravstveni partner',
  description: 'Apoteka u Novom Pazaru sa 25 godina iskustva. Pružamo farmaceutsku negu, zdravstvene konsultacije i personalizovanu uslugu.',
  generator: 'v0.dev',
  icons: {
    icon: '/dark_logo_transparent_background.png',
    shortcut: '/dark_logo_transparent_background.png',
    apple: '/dark_logo_transparent_background.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="sr">
      <body>
        {children}
      </body>
    </html>
  )
}
