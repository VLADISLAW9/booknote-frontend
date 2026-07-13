import z from 'zod';

import type { ReadingStatus } from '@/generated/api';

export const READING_STATUSES = [
  'Не прочитано',
  'Прочитано',
  'Читаю'
] as const satisfies readonly ReadingStatus[];

export const booksFormSchema = z.object({
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

export type BooksFormValues = z.infer<typeof booksFormSchema>;
