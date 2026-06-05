import type { Metadata } from 'next';

import { Figtree, Geist, Geist_Mono } from 'next/font/google';

import { cn } from '@/src/lib/utils';

import './globals.css';

const figtree = Figtree({ subsets: ['latin'], variable: '--font-sans' });

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'Booknote'
};

const RootLayout = ({
  children
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <html
    className={cn(
      'h-full',
      'antialiased',
      geistSans.variable,
      geistMono.variable,
      'font-sans',
      figtree.variable
    )}
    lang='en'
  >
    <body className='flex min-h-full flex-col'>{children}</body>
  </html>
);

export default RootLayout;
