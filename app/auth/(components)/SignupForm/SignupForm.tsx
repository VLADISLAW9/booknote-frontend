import { Button, InputLabel, PasswordInput, Stack, TextInput } from '@mantine/core';
import { LockIcon, MailIcon, UserIcon } from 'lucide-react';

import { useSignupForm } from './hooks';

export const SignupForm = () => {
  const { form, state, functions } = useSignupForm();

  return (
    <form onSubmit={functions.onSubmit}>
      <Stack gap='lg'>
        <TextInput
          disabled={state.loading}
          label={<InputLabel mb='xs'>Почта</InputLabel>}
          leftSection={<MailIcon />}
          placeholder='Введите почту'
          size='xl'
          type='email'
          {...form.register('email')}
          error={form.formState.errors.email?.message}
        />
        <TextInput
          disabled={state.loading}
          label={<InputLabel mb='xs'>Ваше имя</InputLabel>}
          leftSection={<UserIcon />}
          placeholder='Введите ваше имя'
          size='xl'
          {...form.register('name')}
          error={form.formState.errors.name?.message}
        />
        <PasswordInput
          disabled={state.loading}
          label={<InputLabel mb='xs'>Пароль</InputLabel>}
          leftSection={<LockIcon />}
          placeholder='Введите пароль'
          size='xl'
          type='password'
          {...form.register('password')}
          error={form.formState.errors.password?.message}
        />
        <PasswordInput
          disabled={state.loading}
          label={<InputLabel mb='xs'>Подтвердите пароль</InputLabel>}
          leftSection={<LockIcon />}
          placeholder='Введите пароль снова'
          size='xl'
          type='password'
          {...form.register('confirmPassword')}
          error={form.formState.errors.confirmPassword?.message}
        />
        <Button loading={state.loading} mt='xl' size='xl' type='submit'>
          Зарегистрироваться
        </Button>
      </Stack>
    </form>
  );
};
