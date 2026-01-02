import type { Metadata } from 'next'
import CSSLoader from '@/components/CSSLoader'
import './globals.css'
import './globals.scss'

export const metadata: Metadata = {
  title: 'SoireInc - Digital Agency Creative Portfolio',
  description: 'Creative Agency Portfolio Template',
  keywords: 'creative, agency, portfolio',
  icons: {
    icon: '/assets/images/favicon.ico',
  },
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
        <link rel="shortcut icon" href="/assets/images/favicon.ico" type="image/x-icon" />
      </head>
      <body>
        <CSSLoader />
        {children}
      </body>
    </html>
  )
}

