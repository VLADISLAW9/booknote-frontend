import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const loginSchema = z.object({
  email: z.email('Неверный формат email').min(1, 'Обязательное поле'),
  password: z.string().min(1, 'Обязательное поле')
});

type LoginFormValues = z.infer<typeof loginSchema>;

export const useLoginForm = () => {
  const loginForm = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  });

  const onSubmit = loginForm.handleSubmit(() => undefined);

  return {
    state: { loading: false },
    form: loginForm,
    functions: { onSubmit }
  };
};
