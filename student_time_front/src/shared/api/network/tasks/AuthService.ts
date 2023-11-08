import axios, { AxiosResponse } from "axios";

import { AuthResponse } from "../models";
import { LogoutResponse } from "../models";
import apiAxios from "../base";

const REGISTER_URL = '/auth/register';
const AUTHENTICATE_URL = '/auth/authenticate';
const LOGOUT_URL = '/auth/logout';

export default class AuthService {
  static async login(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
    return apiAxios.post<AuthResponse>(AUTHENTICATE_URL, { email, password });
  }

  static async registration(email: string, password: string, role: string): Promise<AxiosResponse<AuthResponse>> {
    return apiAxios.post<AuthResponse>(REGISTER_URL, { email, password, role });
  }

  static async logout(): Promise<AxiosResponse<LogoutResponse>> {
    return apiAxios.post<LogoutResponse>(LOGOUT_URL);
  }
};