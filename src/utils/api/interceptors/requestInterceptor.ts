import type { RequestConfig } from '@siberiacancode/fetches';

export const requestInterceptor = (config: RequestConfig) => ({
  ...config,
  credentials: 'include' as const
});
