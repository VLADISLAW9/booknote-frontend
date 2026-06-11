import type { RequestConfig } from '@siberiacancode/fetches';

const getServerCookieHeader = async () => {
  if (typeof window !== 'undefined') return undefined;

  const { cookies } = await import('next/headers');

  return (await cookies()).toString();
};

const normalizeHeaders = (headers: RequestConfig['headers']): Record<string, string> => {
  if (!headers) return {};
  if (headers instanceof Headers) return Object.fromEntries(headers.entries());
  if (Array.isArray(headers)) return Object.fromEntries(headers);

  return headers;
};

export const requestInterceptor = async (config: RequestConfig): Promise<RequestConfig> => {
  const cookieHeader = await getServerCookieHeader();
  const headers = normalizeHeaders(config.headers);

  return {
    ...config,
    credentials: 'include' as const,
    headers: {
      ...headers,
      ...(cookieHeader ? { Cookie: cookieHeader } : {})
    }
  };
};
