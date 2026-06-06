import fetches from '@siberiacancode/fetches';

import { requestInterceptor, responseFailureInterceptor } from './interceptors';

export const instance = fetches.create({
  baseURL: 'http://localhost:8000/api',
  headers: {
    'Content-Type': 'application/json'
  }
});

instance.interceptors.request.use(requestInterceptor);
instance.interceptors.response.use(undefined, responseFailureInterceptor);
