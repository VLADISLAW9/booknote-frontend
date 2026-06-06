import type { MantineColorsTuple } from '@mantine/core';
import type { ReactNode } from 'react';

import { Button, createTheme, MantineProvider } from '@mantine/core';

const PRIMARY_COLORS: MantineColorsTuple = [
  '#e7fdf5',
  '#d7f5eb',
  '#b5ead7',
  '#88ddbe',
  '#66d2ab',
  '#50cb9e',
  '#43c898',
  '#32b183',
  '#269d74',
  '#0c8862'
];

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const theme = createTheme({
    defaultRadius: 'xl',
    colors: { primary: PRIMARY_COLORS },
    primaryColor: 'primary'
  });

  return <MantineProvider theme={theme}>{children}</MantineProvider>;
};
