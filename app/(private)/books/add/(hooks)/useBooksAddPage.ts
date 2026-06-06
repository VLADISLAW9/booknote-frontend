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

const getOptionalValue = (value: string) => value || undefined;

type BooksAddFormValues = z.infer<typeof booksAddFormSchema>;

export const useBooksAddPage = () => {
  const router = useRouter();
  const postApiBooksMutation = usePostApiBooksMutation();

  const booksAddForm = useForm<BooksAddFormValues>({
    resolver: zodResolver(booksAddFormSchema),
    defaultValues: {
      title: '',
      author: '',
      genre: '',
      totalPages: 0,
      currentPage: 0,
      readingStatus: 'Читаю',
      cover: '',
      annotation: '',
      startedAt: '',
      finishedAt: ''
    }
  });

  const onSubmit = booksAddForm.handleSubmit(async (data) => {
    const postApiBooksMutationResponse = await postApiBooksMutation.mutateAsync({
      body: {
        title: data.title,
        author: data.author,
        genre: data.genre,
        totalPages: data.totalPages,
        currentPage: data.currentPage,
        readingStatus: data.readingStatus,
        cover: getOptionalValue(data.cover),
        annotation: getOptionalValue(data.annotation),
        startedAt: getOptionalValue(data.startedAt),
        finishedAt: getOptionalValue(data.finishedAt)
      }
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
