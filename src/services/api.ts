import axios, { AxiosError } from "axios";
import type { AxiosResponse } from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 30000,
});

api.interceptors.request.use(
  (config) => {

    return config;
  },
  (error: AxiosError) => {

    return Promise.reject(error);
  },
);

api.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  },
);

export default api;
