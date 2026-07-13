import { zodResolver } from '@hookform/resolvers/zod';
import { useDisclosure } from '@siberiacancode/reactuse';
import { useParams, useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

import { usePatchApiBookByIdMutation } from '@/generated/api';

import type { ChangeProgressFormValues } from '../constants';

import { changeProgressFormSchema } from '../constants';

export interface UseChangeProgressButtonParams {
  currentPage?: number;
}

export const useChangeProgressButton = ({ currentPage }: UseChangeProgressButtonParams) => {
  const router = useRouter();
  const params = useParams<{ id: string }>();

  const changeProgressModal = useDisclosure();

  const patchApiBookByIdMutation = usePatchApiBookByIdMutation();

  const changeProgressForm = useForm<ChangeProgressFormValues>({
    resolver: zodResolver(changeProgressFormSchema),
    defaultValues: { currentPage }
  });

  const onSubmit = changeProgressForm.handleSubmit(async ({ currentPage }) => {
    const patchApiBookByIdMutationResponse = await patchApiBookByIdMutation.mutateAsync({
      body: { currentPage },
      path: { id: params.id }
    });

    if (!patchApiBookByIdMutationResponse.data.success) return;

    changeProgressModal.close();
    router.refresh();
  });

  return {
    features: { changeProgressModal },
    form: changeProgressForm,
    functions: { onSubmit }
  };
};
