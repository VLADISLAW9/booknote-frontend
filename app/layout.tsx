import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import { ColorSchemeScript, mantineHtmlProps } from '@mantine/core';

import { Provider } from '@/src/components';

import '@mantine/core/styles.css';

export const metadata: Metadata = {
  title: 'Booknote'
};

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => (
  <html lang='ru' {...mantineHtmlProps}>
    <head>
      <ColorSchemeScript />
    </head>
    <body>
      <Provider>{children}</Provider>
    </body>
  </html>
);

export default RootLayout;
