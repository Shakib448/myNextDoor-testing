import axios from "axios";

export const Api = axios.create({ baseURL: "http://localhost:5001" });

Api.interceptors.request.use((config) => {
  if (!config.headers) {
    config.headers = {};
  }
  return config;
});
