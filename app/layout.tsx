import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ThemeProvider } from '@/components/theme-provider'
import { headers } from 'next/headers'

export const metadata: Metadata = {
  title: 'Harmony 4 All - Empowering Individuals with Disabilities',
  description: 'Comprehensive therapy, education, and community support for individuals with disabilities. Building inclusive communities where everyone can thrive.',
  keywords: 'disability services, therapy, occupational therapy, physical therapy, speech therapy, special education, community support, New York',
  authors: [{ name: 'Harmony 4 All' }],
  creator: 'Harmony 4 All',
  publisher: 'Harmony 4 All',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://harmony4all.org'),
  openGraph: {
    title: 'Harmony 4 All - Empowering Individuals with Disabilities',
    description: 'Comprehensive therapy, education, and community support for individuals with disabilities.',
    url: 'https://harmony4all.org',
    siteName: 'Harmony 4 All',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Harmony 4 All - Empowering Individuals with Disabilities',
    description: 'Comprehensive therapy, education, and community support for individuals with disabilities.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // Check if this is an admin route
  const headersList = await headers()
  const pathname = headersList.get('x-invoke-path') || ''
  const isAdminRoute = pathname.startsWith('/admin') || pathname.includes('/admin')

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-VM8DPCM71C"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-VM8DPCM71C');
            `,
          }}
        />
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}

/* Skip to content link */
.skip-link {
  position: absolute;
  top: -40px;
  left: 6px;
  background: #000;
  color: white;
  padding: 8px;
  text-decoration: none;
  border-radius: 4px;
  z-index: 1000;
  transition: top 0.3s;
}

.skip-link:focus {
  top: 6px;
}

/* Focus styles for better accessibility */
*:focus {
  outline: 2px solid #3b82f6;
  outline-offset: 2px;
}

/* Reduce motion for users who prefer it */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
        `}</style>
        
      </head>
      <body suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
              <Header />
              <main id="main-content" className="pt-16" role="main">
                {children}
              </main>
              <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
