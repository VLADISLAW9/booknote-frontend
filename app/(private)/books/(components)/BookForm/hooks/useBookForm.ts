import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

import type { BookResponseDto } from '@/generated/api';

import { usePatchApiBookByIdMutation, usePostApiBooksMutation } from '@/generated/api';
import { ROUTES } from '@/src/utils/constants';

import type { BooksFormValues } from '../constants';

import { booksFormSchema } from '../constants';

interface BookAddFormParams {
  action: 'add';
  initialValues?: never;
}

interface BookEditFormParams {
  action: 'edit';
  initialValues: BookResponseDto;
}

export type UseBookFormParams = BookAddFormParams | BookEditFormParams;

export const useBooksForm = ({ action, initialValues }: UseBookFormParams) => {
  const router = useRouter();

  const patchApiBookByIdMutation = usePatchApiBookByIdMutation();
  const postApiBooksMutation = usePostApiBooksMutation();

  const booksForm = useForm<BooksFormValues>({
    resolver: zodResolver(booksFormSchema),
    defaultValues: {
      annotation: initialValues?.annotation ?? '',
      title: initialValues?.title ?? '',
      author: initialValues?.author ?? '',
      genre: initialValues?.genre ?? '',
      cover: initialValues?.cover ?? '',
      totalPages: initialValues?.totalPages ?? 1,
      currentPage: initialValues?.currentPage ?? 0,
      readingStatus: initialValues?.readingStatus ?? 'Не прочитано'
    }
  });

  const onSubmit = booksForm.handleSubmit(async (data) => {
    if (action === 'add') {
      const postApiBooksMutationResponse = await postApiBooksMutation.mutateAsync({
        body: data
      });

      if (!postApiBooksMutationResponse.data.success) return;

      router.push(ROUTES.BOOK(postApiBooksMutationResponse.data.data.id));
    }

    if (action === 'edit') {
      const patchApiBookByIdMutationResponse = await patchApiBookByIdMutation.mutateAsync({
        body: data,
        path: { id: initialValues.id }
      });

      if (!patchApiBookByIdMutationResponse.data.success) return;

      router.push(ROUTES.BOOK(patchApiBookByIdMutationResponse.data.data.id));
    }
  });

  return {
    state: { loading: postApiBooksMutation.isPending || patchApiBookByIdMutation.isPending },
    form: booksForm,
    functions: { onSubmit }
  };
};
