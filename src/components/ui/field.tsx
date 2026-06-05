import * as React from 'react';

import { cn } from '@/src/lib/utils';

const FieldGroup = ({ className, ...props }: React.ComponentProps<'div'>) => (
  <div className={cn('flex flex-col gap-4', className)} data-slot='field-group' {...props} />
);

const Field = ({ className, ...props }: React.ComponentProps<'div'>) => (
  <div
    className={cn(
      'group/field data-[invalid=true]:text-destructive flex flex-col gap-2',
      className
    )}
    data-slot='field'
    {...props}
  />
);

const FieldLabel = ({ className, ...props }: React.ComponentProps<'label'>) => (
  <label
    className={cn(
      'flex w-fit items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]/field:pointer-events-none group-data-[disabled=true]/field:opacity-50',
      className
    )}
    data-slot='field-label'
    {...props}
  />
);

const FieldDescription = ({ className, ...props }: React.ComponentProps<'p'>) => (
  <p
    className={cn('text-muted-foreground text-sm', className)}
    data-slot='field-description'
    {...props}
  />
);

const FieldError = ({ className, ...props }: React.ComponentProps<'p'>) => (
  <p className={cn('text-destructive text-sm', className)} data-slot='field-error' {...props} />
);

export { Field, FieldDescription, FieldError, FieldGroup, FieldLabel };
