import axios, { InternalAxiosRequestConfig } from "axios";
import { useAppDispatch } from '../../lib/hooks/storeHooks';
import { addUserIsAuth, refresh } from "../../stores/slice/authSlice/authSlice";
import { accessTokenResponse } from "../models";
import { API_URL } from "../../config";

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
    const dispatch = useAppDispatch();
    originalRequest._isRetry = true;
    try {
      const response = await apiAxios.post<accessTokenResponse>('/auth/refresh');
      localStorage.setItem('token', response.data.accessToken);

      return apiAxios.request(originalRequest);
    } catch (e: any) {
      dispatch(addUserIsAuth(false));
      console.log(e.message);
    }
  }
  throw error;
});

export default apiAxios;