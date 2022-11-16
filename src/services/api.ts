import axios from 'axios';

window.Promise = Promise;

export default () => {
  const { REACT_APP_HTTP_PROTO: proto, REACT_APP_WS_HOST: host, REACT_APP_HTTP_PORT: port } = process.env;

  const service = axios.create({
    baseURL: `${proto}://${host}:${port}/`, // url of the api
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
