export const ROUTES = {
  BOOKS: '/books',
  AUTH: '/auth',
  BOOK: (id: string) => `/books/${id}`,
  BOOK_EDIT: (id: string) => `/books/${id}/edit`
} as const;
