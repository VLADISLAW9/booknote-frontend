'use client';

import { Badge, Group, Scroller, Text, TextInput, Title } from '@mantine/core';
import { SearchIcon } from 'lucide-react';

const HomePage = () => (
  <div>
    <Title order={2}>Ваша библиотека</Title>
    <Text>Обретение покоя на страницах 42 книг</Text>
    <TextInput
      leftSection={<SearchIcon />}
      mt='lg'
      placeholder='Введите название книги...'
      size='xl'
    />
    <Scroller maw='100%' mt='lg'>
      <Group align='center' gap='xs' wrap='nowrap'>
        {Array.from({ length: 20 }).map((_, index) => (
          <Badge fullWidth key={index} p='lg' size='xl' variant='light'>
            Badge
          </Badge>
        ))}
      </Group>
    </Scroller>
  </div>
);

export default HomePage;
