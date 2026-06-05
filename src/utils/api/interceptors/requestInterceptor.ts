import { LOCAL_STORAGE_KEYS } from '../../constants/localStorage';

export const requestInterceptor = (config: any) => {
  const accessToken = localStorage.getItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN);

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
};
