import axios, { AxiosRequestConfig } from 'axios';
import { useAppDispatch } from '../hooks/storeHooks';
import { AuthResponse } from '../models/response/AuthResponse';
import { addUserId } from '../store/slice/authSlice/authSlice';

export const API_URL = 'http://localhost:8080/';

const apiAxios = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  timeout: 10000
});

// apiAxios.interceptors.request.use((config:AxiosRequestConfig) => {
//   config.headers!.Authorization = `Bearer ${localStorage.getItem('token')}`;
//   return config;
// });

// eslint-disable-next-line consistent-return
// apiAxios.interceptors.response.use((config) => config, async (error) => {
//   const originalRequest = error.config;

//   // eslint-disable-next-line no-underscore-dangle
//   if (error.response.status === 401 && error.config && !error.config._isRetry) {
//     // eslint-disable-next-line no-underscore-dangle
//     originalRequest._isRetry = true;
//     try {
//       const dispatch = useAppDispatch();

//       const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, { withCredentials: true });

//       localStorage.setItem('token', response.data.accessToken);

//       dispatch(addUserId(response.data.user.id));

//       return apiAxios.request(originalRequest);
//     } catch (e:any) {
//       console.log(e.message);
//     }
//   }

//   throw error;
// });

export default apiAxios;