import type { ReactNode } from 'react';

import {
  AppShell,
  AppShellFooter,
  AppShellHeader,
  AppShellMain,
  Avatar,
  Flex,
  SegmentedControl
} from '@mantine/core';
import { LibraryBigIcon, PlusIcon, UserIcon } from 'lucide-react';

import { Logotype } from '@/src/components';

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => (
  <html>
    <body>
      <AppShell footer={{ height: 80 }} header={{ height: 80 }} padding='30'>
        <AppShellHeader px='xl' py='lg' withBorder={false}>
          <Flex align='center' justify='space-between'>
            <Flex align='center' gap='sm'>
              <Logotype size={42} />
            </Flex>
            <Avatar size={42} />
          </Flex>
        </AppShellHeader>

        <AppShellMain>{children}</AppShellMain>

        <AppShellFooter px='xl' withBorder={false}>
          <SegmentedControl
            fullWidth
            data={[
              {
                value: 'preview',
                label: <LibraryBigIcon size={24} />
              },
              {
                value: 'export',
                label: <UserIcon size={24} />
              },

              {
                value: 'f',
                label: <PlusIcon size={24} />
              }
            ]}
            color='primary'
            size='lg'
          />
        </AppShellFooter>
      </AppShell>
    </body>
  </html>
);

export default RootLayout;
