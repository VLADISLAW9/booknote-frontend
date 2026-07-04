import { Card, Image, Progress, Text } from '@mantine/core';

import { getReadingPercentage } from './helpers';

const NOT_FOUND_COVER =
  'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png';

interface BookItemProps {
  author: string;
  cover?: string;
  finishedAt: string;
  id: string;
  startedAt: string;
  title: string;
}

export const BookItem = ({ author, title, cover, finishedAt, startedAt }: BookItemProps) => {
  const readingPercentage = getReadingPercentage({ finishedAt, startedAt });

  return (
    <Card>
      <Image alt='Norway' height={160} src={cover ?? NOT_FOUND_COVER} />

      <Text fw={500} truncate='end'>
        {title}
      </Text>

      <Text c='dimmed' size='sm'>
        {author}
      </Text>

      <Progress value={readingPercentage} />
    </Card>
  );
};
