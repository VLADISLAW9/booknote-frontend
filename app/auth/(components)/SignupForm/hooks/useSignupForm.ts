import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import z from 'zod';

import { usePostApiAuthRegisterMutation } from '@/generated/api';
import { ROUTES } from '@/src/utils/constants';

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
  const router = useRouter();
  const postAuthRegisterMutation = usePostApiAuthRegisterMutation();

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

    router.push(ROUTES.BOOKS);
  });

  return { form: signupForm, state: { loading: false }, functions: { onSubmit } };
};
