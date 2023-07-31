import axios, { AxiosRequestConfig, InternalAxiosRequestConfig } from "axios";

export const API_URL = "http://localhost:8080/";

export const apiAxios = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  timeout: 10000,
});

// axios.interceptors.request.use(
//   config => {
//     config.headers['Authorization'] = `Bearer ${localStorage.getItem('access_token')}`

//     error => {
//         return Promise.reject(error);
//     }
// );
