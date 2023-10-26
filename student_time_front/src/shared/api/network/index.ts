import axios, { InternalAxiosRequestConfig } from "axios";
import { useAppDispatch } from '../../lib/hooks/storeHooks';
import { AuthResponse } from '../../../models/response/AuthResponse';

export const API_URL = 'http://localhost:8080/';

const apiAxios = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  timeout: 10000
});

apiAxios.interceptors.request.use((config:InternalAxiosRequestConfig) => {
  config.headers!.Authorization = `Bearer ${localStorage.getItem('token')}`;
  return config;
});

// eslint-disable-next-line consistent-return
apiAxios.interceptors.response.use((config) => config, async (error) => {
  const originalRequest = error.config;

  // eslint-disable-next-line no-underscore-dangle
  if (error.response.status === 401 && error.config && !error.config._isRetry) {
    // eslint-disable-next-line no-underscore-dangle
    originalRequest._isRetry = true;
    try {
      const dispatch = useAppDispatch();

      const response = await axios.post<AuthResponse>(`${API_URL}auth/refresh`, { withCredentials: true });
      localStorage.setItem('token', response.data.accessToken);
      return apiAxios.request(originalRequest);
    } catch (e:any) {
      console.log(e.message);
    }
  }

  throw error;
});

export default apiAxios;