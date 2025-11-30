import '@twitter-web/ui/styles.css';
import './global.css';
import { ThemeProvider } from '@twitter-web/ui';
import { type Viewport } from 'next';

export const metadata = {
  title: 'X Mobile',
  description: 'X Mobile - Progressive Web App',
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'X Mobile',
  },
  icons: {
    icon: '/logo-x.svg',
    apple: '/logo-x.svg',
  },
};

export const viewport: Viewport = {
  themeColor: '000000',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white text-black dark:bg-dark-1 dark:text-white min-h-screen">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="max-w-md mx-auto min-h-screen">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
