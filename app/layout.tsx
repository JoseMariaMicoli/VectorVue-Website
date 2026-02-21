import type { Metadata } from 'next';
import './globals.css';
import { siteConfig } from '@/lib/site';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ThemeProvider } from '@/components/theme-provider';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: 'VectorVue by Nyxera Labs | Security Validation Infrastructure Platform',
    template: '%s | VectorVue'
  },
  description: siteConfig.description,
  icons: {
    icon: [
      { url: '/VectorVueLogo-transp.png', sizes: '534x426', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/favicon.ico' }
    ],
    shortcut: ['/VectorVueLogo-transp.png'],
    apple: [{ url: '/VectorVueLogo-transp.png', sizes: '534x426', type: 'image/png' }]
  },
  manifest: '/site.webmanifest',
  alternates: {
    canonical: '/'
  },
  openGraph: {
    title: 'VectorVue by Nyxera Labs | Security Validation Infrastructure Platform',
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VectorVue by Nyxera Labs | Security Validation Infrastructure Platform',
    description: siteConfig.description
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
