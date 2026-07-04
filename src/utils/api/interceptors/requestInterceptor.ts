import type { RequestConfig } from '@siberiacancode/fetches';

import { getCookie } from '../../helpers';

export const requestInterceptor = async (config: RequestConfig): Promise<RequestConfig> => {
  const cookieHeader = await getCookie();
  const headers = config.headers as Record<string, string> | undefined;

  return {
    ...config,
    credentials: 'include' as const,
    headers: {
      ...headers,
      ...(cookieHeader ? { Cookie: cookieHeader } : {})
    }
  };
};
