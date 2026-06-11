import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import z from 'zod';

import { usePostApiAuthLoginMutation } from '@/generated/api';
import { ROUTES } from '@/src/utils/constants';

const loginFormSchema = z.object({
  email: z.email({ message: 'Некорректный email' }).min(1, { message: 'Обязательное поле' }),
  password: z.string().min(1, { message: 'Обязательное поле' })
});

type LoginFormSchema = z.infer<typeof loginFormSchema>;

export const useLoginForm = () => {
  const router = useRouter();
  const postAuthLoginMutation = usePostApiAuthLoginMutation();

  const loginForm = useForm<LoginFormSchema>({
    resolver: zodResolver(loginFormSchema)
  });

  const onSubmit = loginForm.handleSubmit(async (data) => {
    const postAuthLoginMutationResponse = await postAuthLoginMutation.mutateAsync({ body: data });

    if (!postAuthLoginMutationResponse.data.success) return;

    router.push(ROUTES.BOOKS);
  });

  return {
    form: loginForm,
    state: { loading: postAuthLoginMutation.isPending },
    functions: { onSubmit }
  };
};
