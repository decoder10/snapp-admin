import { AxiosRequestConfig } from 'axios';

import client from 'services/api';

interface IFetch<T> {
  type: TFetchTypes;
  url: string;
  body: T & AxiosRequestConfig<T>;
}

export const useFetch = (): [<T>({ type, url, body }: IFetch<T>) => void] => {
  const fetchData = <T>({ type, url, body }: IFetch<T>) => {
    return client()[type](url, body);
  };

  return [fetchData];
};
