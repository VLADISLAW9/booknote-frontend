import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const loginSchema = z.object({
  email: z.email('Неверный формат email').min(1, 'Обязательное поле'),
  password: z.string().min(1, 'Обязательное поле')
});

export const useLoginPage = () => {
  const loginForm = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  });

  const onSubmit = loginForm.handleSubmit((data) => {});

  return {
    form: loginForm,
    functions: { onSubmit }
  };
};
