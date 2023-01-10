import { useState } from 'react';

import { AxiosRequestConfig } from 'axios';

import client from 'services/api';

import { CustomersFakeData } from 'ui/customer/customers-fake-data';

interface IFetch<T> {
  method: TFetchTypes;
  url: string;
  body?: T & AxiosRequestConfig<T>;
}

export const useFetch = <DataType>(): {
  readonly fetchData: <T>({ method, url, body }: IFetch<T>) => Promise<void>;
  readonly resultData: Nullable<DataType>;
} => {
  const [resultData, setResultData] = useState<Nullable<DataType>>(null);

  const fetchData = async <T>({ method, url, body }: IFetch<T>) => {
    try {
      const makeRequest = await client()[method](url, body);

      console.log('log--------------makeRequest', makeRequest);

      if (makeRequest) {
        setResultData(CustomersFakeData as DataType);
      }
    } catch (e) {
      setResultData(CustomersFakeData as DataType);
    }
  };

  return { fetchData, resultData };
};
