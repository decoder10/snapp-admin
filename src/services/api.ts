import axios from 'axios';

window.Promise = Promise;

export default () => {
  const service = axios.create({
    baseURL: ``, // url of the api
    headers: {
      'Content-Type': 'application/json',
    },
  });

  service.interceptors.request.use(async config => config);

  service.interceptors.response.use(
    response => {
      if (response.data) {
        return response.data;
      }

      return response;
    },
    async error => {
      throw error;
    },
  );

  return service;
};
