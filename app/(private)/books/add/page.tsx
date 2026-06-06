'use client';

import {
  Button,
  Flex,
  InputLabel,
  NumberInput,
  Select,
  Stack,
  Textarea,
  TextInput
} from '@mantine/core';
import { Controller } from 'react-hook-form';

import type { ReadingStatus } from '@/generated/api';

import { useBooksAddPage } from './(hooks)';

const READING_STATUS_OPTIONS: { label: ReadingStatus; value: ReadingStatus }[] = [
  { label: 'Читаю', value: 'Читаю' },
  { label: 'Прочитано', value: 'Прочитано' },
  { label: 'Не прочитано', value: 'Не прочитано' }
];

const BooksAddPage = () => {
  const { form, functions, state } = useBooksAddPage();

  return (
    <form onSubmit={functions.onSubmit}>
      <Stack gap='lg'>
        <TextInput
          disabled={state.loading}
          label={<InputLabel mb='xs'>Обложка</InputLabel>}
          placeholder='Укажите ссылку на обложку...'
          size='xl'
          {...form.register('cover')}
          error={form.formState.errors.cover?.message}
        />
        <TextInput
          disabled={state.loading}
          label={<InputLabel mb='xs'>Название</InputLabel>}
          placeholder='Введите название книги...'
          size='xl'
          {...form.register('title')}
          error={form.formState.errors.title?.message}
        />
        <TextInput
          disabled={state.loading}
          label={<InputLabel mb='xs'>Автор</InputLabel>}
          placeholder='Введите автора книги...'
          size='xl'
          {...form.register('author')}
          error={form.formState.errors.author?.message}
        />
        <TextInput
          disabled={state.loading}
          label={<InputLabel mb='xs'>Жанр</InputLabel>}
          placeholder='Введите жанр книги...'
          size='xl'
          {...form.register('genre')}
          error={form.formState.errors.genre?.message}
        />

        <Controller
          render={({ field, fieldState }) => (
            <NumberInput
              {...field}
              disabled={state.loading}
              error={fieldState.error?.message}
              label={<InputLabel mb='xs'>Всего страниц</InputLabel>}
              min={1}
              placeholder='Введите количество страниц...'
              size='xl'
            />
          )}
          control={form.control}
          name='totalPages'
        />
        <Controller
          render={({ field, fieldState }) => (
            <NumberInput
              {...field}
              disabled={state.loading}
              error={fieldState.error?.message}
              label={<InputLabel mb='xs'>Текущая страница</InputLabel>}
              min={0}
              placeholder='Введите текущую страницу...'
              size='xl'
            />
          )}
          control={form.control}
          name='currentPage'
        />
        <Controller
          render={({ field, fieldState }) => (
            <Select
              {...field}
              allowDeselect={false}
              data={READING_STATUS_OPTIONS}
              disabled={state.loading}
              error={fieldState.error?.message}
              label={<InputLabel mb='xs'>Статус чтения</InputLabel>}
              placeholder='Выберите статус чтения...'
              size='xl'
            />
          )}
          control={form.control}
          name='readingStatus'
        />

        <Textarea
          autosize
          disabled={state.loading}
          label={<InputLabel mb='xs'>Аннотация</InputLabel>}
          minRows={4}
          placeholder='Напишите аннотацию к книге...'
          size='xl'
          {...form.register('annotation')}
          error={form.formState.errors.annotation?.message}
        />
        <TextInput
          disabled={state.loading}
          label={<InputLabel mb='xs'>Дата начала чтения</InputLabel>}
          size='xl'
          type='date'
          {...form.register('startedAt')}
          error={form.formState.errors.startedAt?.message}
        />
        <TextInput
          disabled={state.loading}
          label={<InputLabel mb='xs'>Дата завершения чтения</InputLabel>}
          size='xl'
          type='date'
          {...form.register('finishedAt')}
          error={form.formState.errors.finishedAt?.message}
        />

        <Button loading={state.loading} mt='xl' size='xl' type='submit' variant='light'>
          Создать
        </Button>
      </Stack>
    </form>
  );
};

export default BooksAddPage;
