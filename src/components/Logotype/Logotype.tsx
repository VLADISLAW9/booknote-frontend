import type { ActionIconProps } from '@mantine/core';

import { ActionIcon, Box } from '@mantine/core';
import { BookOpen } from 'lucide-react';

type LogotypeProps = ActionIconProps;

export const Logotype = ({ size = 64, ...props }: LogotypeProps) => (
  <ActionIcon component={Box} radius='md' size={size} variant='light' {...props}>
    <BookOpen size={Number(size) - 12} />
  </ActionIcon>
);
