export const getCookie = async () => {
  if (typeof window !== 'undefined') return undefined;

  const { cookies } = await import('next/headers');

  return (await cookies()).toString();
};
