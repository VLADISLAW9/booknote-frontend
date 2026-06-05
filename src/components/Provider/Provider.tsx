import type { ReactNode } from 'react';

import { ThemeProvider } from './components';

interface ProviderProps {
  children: ReactNode;
}

export const Provider = ({ children }: ProviderProps) => <ThemeProvider>{children}</ThemeProvider>;
