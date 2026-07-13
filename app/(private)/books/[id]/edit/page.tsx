import { notFound } from 'next/navigation';

import { getApiBookById } from '@/generated/api';

import { BookForm } from '../../(components)';

interface BookEditPageParams {
  id: string;
}

interface BookEditPageProps {
  params: Promise<BookEditPageParams>;
}

const BookEditPage = async (props: BookEditPageProps) => {
  const params = await props.params;
  const getApiBookByIdResponse = await getApiBookById({ path: { id: params.id } });

  const book = getApiBookByIdResponse.data.success ? getApiBookByIdResponse.data.data : null;

  if (!book) return notFound();

  return <BookForm action='edit' initialValues={book} />;
};

export default BookEditPage;
