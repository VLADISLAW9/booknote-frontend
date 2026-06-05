import { Field, FieldError, FieldGroup } from '@/src/components/ui/field';
import { useLoginForm } from './(hooks)';
import { Controller } from 'react-hook-form';
import { Button } from '@/src/components/ui/button';
import { Input } from '@/src/components/ui/input';
import { Label } from '@/src/components/ui/label';

export const LoginForm = () => {
  const { state, form, functions } = useLoginForm();
  return (
    <form className='flex flex-col gap-5' onSubmit={functions.onSubmit}>
      <FieldGroup>
        <Label>Email</Label>
        <Controller
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <Input {...field} aria-invalid={fieldState.invalid} placeholder='Email' />
              {fieldState.invalid && <FieldError>{fieldState.error!.message}</FieldError>}
            </Field>
          )}
          control={form.control}
          name='email'
        />
        <Controller
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <Input {...field} aria-invalid={fieldState.invalid} placeholder='Пароль' />
              {fieldState.invalid && <FieldError>{fieldState.error!.message}</FieldError>}
            </Field>
          )}
          control={form.control}
          name='password'
        />
        <Button className='w-full' loading={state.loading} size='lg' type='submit'>
          Войти
        </Button>
      </FieldGroup>
    </form>
  );
};
