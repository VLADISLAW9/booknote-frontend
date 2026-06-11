import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import z from 'zod';

import type { ReadingStatus } from '@/generated/api';

import { usePostApiBooksMutation } from '@/generated/api';
import { ROUTES } from '@/src/utils/constants';

const READING_STATUSES = [
  'Не прочитано',
  'Прочитано',
  'Читаю'
] as const satisfies readonly ReadingStatus[];

const booksAddFormSchema = z.object({
  title: z.string().min(1, 'Обязательно поле'),
  author: z.string().min(1, 'Обязательно поле'),
  genre: z.string().min(1, 'Обязательно поле'),
  totalPages: z.number().min(1, 'Количество страниц должно быть больше 0'),
  currentPage: z.number().min(0, 'Текущая страница не может быть меньше 0'),
  readingStatus: z.enum(READING_STATUSES),
  cover: z.string(),
  annotation: z.string(),
  startedAt: z.string(),
  finishedAt: z.string()
});

type BooksAddFormValues = z.infer<typeof booksAddFormSchema>;

export const useBooksAddPage = () => {
  const router = useRouter();
  const postApiBooksMutation = usePostApiBooksMutation();

  const booksAddForm = useForm<BooksAddFormValues>({
    resolver: zodResolver(booksAddFormSchema)
  });

  const onSubmit = booksAddForm.handleSubmit(async (data) => {
    const postApiBooksMutationResponse = await postApiBooksMutation.mutateAsync({
      body: data
    });

    if (!postApiBooksMutationResponse.data.success) return;

    router.push(ROUTES.BOOKS);
  });

  return {
    state: { loading: postApiBooksMutation.isPending },
    form: booksAddForm,
    functions: { onSubmit }
  };
};
