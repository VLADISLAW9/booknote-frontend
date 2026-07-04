import {
  Badge,
  Card,
  Group,
  Image,
  Scroller,
  SimpleGrid,
  Text,
  TextInput,
  Title
} from '@mantine/core';
import { SearchIcon } from 'lucide-react';

import { getApiBooks } from '@/generated/api';

import { BookItem } from './(components)';

const BooksPage = async () => {
  const getApiBooksResponse = await getApiBooks();
  const books = getApiBooksResponse.data.success ? getApiBooksResponse.data.data : [];

  return (
    <>
      <Title order={2}>Ваша библиотека</Title>
      <Text>Обретение покоя на страницах {books.length} книг</Text>
      <TextInput
        leftSection={<SearchIcon />}
        mt='lg'
        placeholder='Введите название книги...'
        size='xl'
      />
      <Scroller mt='lg' w='100%'>
        <Group gap='xs' wrap='nowrap'>
          <Badge fullWidth p='lg' size='xl' variant='light' w='100%'>
            Все книги
          </Badge>
          <Badge fullWidth p='lg' size='xl' variant='light'>
            Читаю
          </Badge>
          <Badge fullWidth p='lg' size='xl' variant='light'>
            Прочитаны
          </Badge>
        </Group>
      </Scroller>
      <SimpleGrid cols={2} mt='xl'>
        {books.map((book) => (
          <BookItem
            key={book.id}
            author={book.author}
            cover={book.cover}
            finishedAt={book.finishedAt}
            startedAt={book.startedAt}
            title={book.title}
          />
        ))}
      </SimpleGrid>
    </>
  );
};

export default BooksPage;
