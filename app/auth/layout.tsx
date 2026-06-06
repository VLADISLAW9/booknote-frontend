import type { ReactNode } from 'react';

import { ActionIcon, Box, Container, Stack, Title } from '@mantine/core';
import { BookOpen } from 'lucide-react';

interface AuthLayoutProps {
  children: ReactNode;
}

export const metadata = {
  title: 'Booknote | Auth'
};

const AuthLayout = ({ children }: AuthLayoutProps) => (
  <Container h='100vh' py='xl' size='xs'>
    <Stack align='center' gap='xl' mb='xl'>
      {/* TODO: make logotype component */}
      <ActionIcon component={Box} radius='md' size={64}>
        <BookOpen size={48} />
      </ActionIcon>
      <Title c='primary' order={1}>
        Booknote
      </Title>
    </Stack>
    {children}
  </Container>
);

export default AuthLayout;
