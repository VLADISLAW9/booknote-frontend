import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import z from 'zod';

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
  const signupForm = useForm({
    resolver: zodResolver(signupFormSchema),
    defaultValues: {
      email: '',
      password: '',
      name: '',
      confirmPassword: ''
    }
  });

  const onSubmit = signupForm.handleSubmit((data) => {
    console.log(data);
  });

  return { form: signupForm, state: { loading: false }, functions: { onSubmit } };
};
