import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import z from 'zod';

import { usePostAuthRegisterMutation } from '@/generated/api';
import { LOCAL_STORAGE_KEYS } from '@/src/utils/constants/localStorage';

const signupFormSchema = z
  .object({
    email: z.email({ message: 'Некорректный email' }).min(1, { message: 'Обязательное поле' }),
    name: z.string().min(1, { message: 'Обязательное поле' }),
    password: z.string().min(1, { message: 'Обязательное поле' }),
    confirmPassword: z.string().min(1, { message: 'Обязательное поле' })
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Пароли не совпадают',
    path: ['confirmPassword']
  });

export const useSignupForm = () => {
  const postAuthRegisterMutation = usePostAuthRegisterMutation();

  const signupForm = useForm({
    resolver: zodResolver(signupFormSchema),
    defaultValues: {
      email: '',
      password: '',
      name: '',
      confirmPassword: ''
    }
  });

  const onSubmit = signupForm.handleSubmit(async ({ email, name, password }) => {
    const postAuthRegisterMutationResponse = await postAuthRegisterMutation.mutateAsync({
      body: { email, name, password }
    });

    if (!postAuthRegisterMutationResponse.data.success) return;

    localStorage.setItem(
      LOCAL_STORAGE_KEYS.ACCESS_TOKEN,
      postAuthRegisterMutationResponse.data.data.accessToken
    );
  });

  return { form: signupForm, state: { loading: false }, functions: { onSubmit } };
};
