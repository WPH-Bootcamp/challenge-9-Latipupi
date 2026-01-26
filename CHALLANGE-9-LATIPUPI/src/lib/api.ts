import axios from "axios";
import { store } from "./redux/store/store";

export const api = axios.create({
  baseURL: "https://restaurant-be-400174736012.asia-southeast2.run.app",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  const state = store.getState();
  const token = state.auth.token;

  console.log("Current Token:", token);

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});
