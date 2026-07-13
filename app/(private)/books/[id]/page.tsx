import { Button, Card, Group, Image, Progress, SimpleGrid, Stack, Text } from '@mantine/core';
import { Calendar, ShapesIcon } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { getApiBookById } from '@/generated/api';
import { ROUTES } from '@/src/utils/constants';

import { getReadingPercentage } from '../(helpers)';
import { ChangeProgressButton } from './(components)/ChangeProgressButton/ChangeProgressButton';

const NOT_FOUND_COVER =
  'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png';

interface BookPageParams {
  id: string;
}

interface BookPageProps {
  params: Promise<BookPageParams>;
}

const BookPage = async (props: BookPageProps) => {
  const params = await props.params;
  const getApiBookByIdResponse = await getApiBookById({ path: { id: params.id } });

  const book = getApiBookByIdResponse.data.success ? getApiBookByIdResponse.data.data : null;

  if (!book) return notFound();

  const readingPercentage = getReadingPercentage({
    currentPage: book.currentPage,
    totalPages: book.totalPages
  });

  const finishedAtDate = book.finishedAt
    ? new Date(book.finishedAt).toLocaleDateString('ru-RU', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      })
    : null;

  const startedAtDate = book.startedAt
    ? new Date(book.startedAt).toLocaleDateString('ru-RU', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      })
    : null;

  return (
    <>
      <Group align='center' justify='space-between'>
        <Link href={ROUTES.BOOKS}>
          <Button size='compact-sm' variant='transparent'>
            Назад
          </Button>
        </Link>
        <Link href={ROUTES.BOOK_EDIT(book.id)}>
          <Button size='compact-sm' variant='transparent'>
            Изменить
          </Button>
        </Link>
      </Group>

      <Stack align='center' mt='md'>
        <Image h={300} radius='md' src={book.cover ?? NOT_FOUND_COVER} w={200} />
        <Text fw='500' fz='h1'>
          {book.title}
        </Text>
        <Text c='dimmed'>{book.author}</Text>
      </Stack>

      <Card mt='md' radius='lg' shadow='xs' w='100%'>
        <Text fw='500'>Прогресс чтения</Text>
        <Group justify='space-between'>
          <Text fw='500' fz='h3'>
            {readingPercentage}% прочитано
          </Text>
          <Text c='dimmed' mt={1}>
            {book.currentPage} / {book.totalPages} страниц
          </Text>
        </Group>
        <Progress mt='md' value={readingPercentage} />
        <ChangeProgressButton totalPages={book.totalPages} />
      </Card>

      <SimpleGrid cols={2} mt='lg' spacing='xs' w='100%'>
        <Card bg='pink.1' radius='lg'>
          <ShapesIcon color='var(--mantine-color-pink-9)' />
          <Text c='pink.9' fw='500' mt='md'>
            Жанр
          </Text>
          <Text c='pink.9' fw='500' fz='h3'>
            {book.genre}
          </Text>
        </Card>
        {startedAtDate && (
          <Card bg='orange.1' radius='lg'>
            <Calendar color='var(--mantine-color-orange-9)' />
            <Text c='orange.9' fw='500' mt='md'>
              Начало
            </Text>
            <Text c='orange.9' fw='500' fz='h3'>
              {startedAtDate}
            </Text>
          </Card>
        )}
        {finishedAtDate && (
          <Card bg='blue.1' radius='lg'>
            <Calendar color='var(--mantine-color-blue-9)' />
            <Text c='blue.9' fw='500' mt='md'>
              Завершение
            </Text>
            <Text c='blue.9' fw='500' fz='h3'>
              {finishedAtDate}
            </Text>
          </Card>
        )}
      </SimpleGrid>

      <Text fw='500' fz='h2' mt='lg'>
        Аннотация
      </Text>
      <Card bg='gray.1' mt='md' radius='lg' w='100%'>
        <Text>{book.annotation ?? 'Аннотация отсутствует'}</Text>
      </Card>
    </>
  );
};

export default BookPage;
