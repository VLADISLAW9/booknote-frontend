import { Card, Image, Progress, Text } from '@mantine/core';
import Link from 'next/link';

import { ROUTES } from '@/src/utils/constants';

import { getReadingPercentage } from '../(helpers)';

const NOT_FOUND_COVER =
  'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png';

interface BookItemProps {
  author: string;
  cover?: string | null;
  finishedAt?: string | null;
  id: string;
  startedAt?: string | null;
  title: string;
}

export const BookItem = ({ author, title, cover, finishedAt, startedAt, id }: BookItemProps) => {
  const readingPercentage =
    finishedAt && startedAt ? getReadingPercentage({ finishedAt, startedAt }) : 0;

  const isFinished = readingPercentage === 100;

  const finishedAtDate = finishedAt
    ? new Date(finishedAt).toLocaleDateString('ru-RU', {
        day: '2-digit',
        month: 'long'
      })
    : null;

  return (
    <Link href={ROUTES.BOOK(id)} style={{ textDecoration: 'none' }}>
      <Card p='xs'>
        <Image alt={title} height={200} radius='md' src={cover ?? NOT_FOUND_COVER} />

        <Text fw={500} truncate='end'>
          {title}
        </Text>

        <Text c='dimmed' size='sm'>
          {author}
        </Text>

        <Progress mt='sm' value={readingPercentage} />

        {isFinished && (
          <Text mt='xs' size='sm'>
            Прочитано {finishedAtDate}
          </Text>
        )}

        {!isFinished && (
          <Text mt='xs' size='sm'>
            {readingPercentage}% прочитано
          </Text>
        )}
      </Card>
    </Link>
  );
};
