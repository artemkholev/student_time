import axios from "axios";

export const API_URL = "http://localhost:8080/";

const apiAxios = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  timeout: 10000,
});