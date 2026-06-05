import { Button, InputLabel, PasswordInput, Stack, TextInput } from '@mantine/core';
import { LockIcon, MailIcon } from 'lucide-react';

import { useLoginForm } from './hooks';

export const LoginForm = () => {
  const { login, state, functions } = useLoginForm();

  return (
    <form onSubmit={functions.onSubmit}>
      <Stack gap='lg'>
        <TextInput
          disabled={state.loading}
          label={<InputLabel mb='xs'>Email</InputLabel>}
          leftSection={<MailIcon />}
          placeholder='Email'
          size='xl'
          type='email'
          {...login.register('email')}
          error={login.formState.errors.email?.message}
        />
        <PasswordInput
          disabled={state.loading}
          label={<InputLabel mb='xs'>Password</InputLabel>}
          leftSection={<LockIcon />}
          placeholder='Password'
          size='xl'
          type='password'
          {...login.register('password')}
          error={login.formState.errors.password?.message}
        />
        <Button loading={state.loading} mt='xl' size='xl' type='submit'>
          Войти
        </Button>
      </Stack>
    </form>
  );
};
