'use client';
import { Button, Modal, NumberInput } from '@mantine/core';
import { EditIcon } from 'lucide-react';
import { Controller } from 'react-hook-form';

import { useChangeProgressButton } from './hooks';

export interface ChangeProgressButtonProps {
  currentPage?: number;
  totalPages: number;
}

export const ChangeProgressButton = ({ totalPages, currentPage }: ChangeProgressButtonProps) => {
  const { features, functions, form } = useChangeProgressButton({ currentPage });

  return (
    <>
      <Button
        leftSection={<EditIcon />}
        mt='lg'
        size='lg'
        variant='light'
        onClick={features.changeProgressModal.open}
      >
        Изменить прогресс
      </Button>

      <Modal
        centered
        opened={features.changeProgressModal.opened}
        title='Изменить прогресс чтения'
        onClose={features.changeProgressModal.close}
      >
        <form onSubmit={functions.onSubmit}>
          <Controller
            render={({ field }) => (
              <NumberInput
                allowNegative={false}
                max={totalPages}
                min={0}
                placeholder='Укажите текущую страницу'
                radius='lg'
                size='lg'
                {...field}
                {...(form.formState.errors.currentPage?.message && {
                  error: form.formState.errors.currentPage.message
                })}
              />
            )}
            control={form.control}
            name='currentPage'
          />

          <Button mt='md' radius='lg' size='lg' type='submit' w='100%'>
            Сохранить
          </Button>
        </form>
      </Modal>
    </>
  );
};
