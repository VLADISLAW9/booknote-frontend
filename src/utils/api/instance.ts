import fetches from '@siberiacancode/fetches';
import { responseFailureInterceptor, requestInterceptor } from './interceptors';

export const instance = fetches.create({
  baseURL: 'http://localhost:8000/api'
});

instance.interceptors.request.use(requestInterceptor);
instance.interceptors.response.use(undefined, responseFailureInterceptor);
