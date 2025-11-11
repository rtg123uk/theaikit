import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { WebVitals } from '@/components/WebVitals'
import Layout from '@/components/Layout'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
})

export const metadata: Metadata = {
  metadataBase: new URL('https://aiagencystartup.com'),
  title: 'The AI Agency Kit - Empowering entrepreneurs to build successful AI automation businesses.',
  description: 'Empowering entrepreneurs to build successful AI automation businesses.',
  keywords: ['AI', 'agency', 'automation', 'business growth', 'solopreneur', 'online business'],
  openGraph: {
    title: 'The AI Agency Kit - Empowering entrepreneurs to build successful AI automation businesses.',
    description: 'Empowering entrepreneurs to build successful AI automation businesses.',
    url: 'https://aiagencystartup.com',
    siteName: 'The AI Agency Kit',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The AI Agency Kit - Empowering entrepreneurs to build successful AI automation businesses.',
    description: 'Empowering entrepreneurs to build successful AI automation businesses.',
    images: ['/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="canonical" href="https://aiagencystartup.com" />
        <meta name="robots" content="index, follow" />
        <link
          rel="preload"
          href="/og-image.jpg"
          as="image"
          type="image/jpeg"
        />
        {/* Preload critical assets */}
        <link
          rel="preload"
          href="/dashboard-mockup.png"
          as="image"
          type="image/png"
        />
        <link
          rel="preload"
          href="/logos/botpress.svg"
          as="image"
          type="image/svg+xml"
        />
        <link
          rel="preload"
          href="/logos/openai.svg"
          as="image"
          type="image/svg+xml"
        />
        <link
          rel="preload"
          href="/logos/make.svg"
          as="image"
          type="image/svg+xml"
        />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-R7249RJ6XH"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (async function() {
                function shouldDisableGA() {
                  if (typeof window === 'undefined') return false;
                  if (window.localStorage && window.localStorage.getItem('disableGA')) return true;
                  return false;
                }
                let blockByIP = false;
                try {
                  const res = await fetch('https://api.ipify.org?format=json');
                  const data = await res.json();
                  if (data.ip === '82.33.118.164') blockByIP = true;
                } catch (e) {}
                if (!shouldDisableGA() && !blockByIP) {
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', 'G-R7249RJ6XH', { anonymize_ip: true });
                }
              })();
            `,
          }}
        />
      </head>
      <body suppressHydrationWarning>
        <WebVitals />
        <Layout>{children}</Layout>
      </body>
    </html>
  )
} 