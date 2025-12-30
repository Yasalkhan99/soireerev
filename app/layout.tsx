import type { Metadata } from 'next'
import './globals.scss'

export const metadata: Metadata = {
  title: 'SoireInc - Digital Agency Creative Portfolio',
  description: 'Creative Agency Portfolio Template',
  keywords: 'creative, agency, portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>{children}</body>
    </html>
  )
}

