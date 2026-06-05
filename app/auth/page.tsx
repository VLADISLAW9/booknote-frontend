'use client';

import { Card, Center, SegmentedControl, Stack } from '@mantine/core';
import { useState } from 'react';

import { LoginForm, SignupForm } from './(components)';

type AUTH_MODE = 'login' | 'signup';

const AuthPage = () => {
  const [segmentedValue, setSegmentedValue] = useState<AUTH_MODE>('login');

  return (
    <Card withBorder padding='lg' shadow='sm'>
      <Center component={Stack} gap='xl'>
        <SegmentedControl
          data={[
            { label: 'Войти', value: 'login' },
            { label: 'Зарегистрироваться', value: 'signup' }
          ]}
          size='xl'
          value={segmentedValue}
          onChange={setSegmentedValue}
        />
        {segmentedValue === 'login' && <LoginForm />}
        {segmentedValue === 'signup' && <SignupForm />}
      </Center>
    </Card>
  );
};

export default AuthPage;
