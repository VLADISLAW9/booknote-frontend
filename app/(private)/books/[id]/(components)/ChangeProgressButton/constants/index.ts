import z from 'zod';

export const changeProgressFormSchema = z.object({
  currentPage: z
    .number({ error: 'Значение должно быть числом' })
    .min(0, 'Текущая страница не может быть меньше 0')
});

export type ChangeProgressFormValues = z.infer<typeof changeProgressFormSchema>;
