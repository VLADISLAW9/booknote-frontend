import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import z from 'zod';

const loginFormSchema = z.object({
  email: z.email({ message: 'Некорректный email' }).min(1, { message: 'Обязательное поле' }),
  password: z.string().min(1, { message: 'Обязательное поле' })
});

export const useLoginForm = () => {
  const loginForm = useForm({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  });

  const onSubmit = loginForm.handleSubmit((data) => {
    console.log(data);
  });

  return { login: loginForm, state: { loading: false }, functions: { onSubmit } };
};
