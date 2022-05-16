import axios from "axios";

export const Api = axios.create({ baseURL: "http://localhost:5000" });

Api.interceptors.request.use((config) => {
  if (!config.headers) {
    config.headers = {};
  }
  return config;
});
