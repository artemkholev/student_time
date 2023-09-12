import axios, { AxiosResponse } from "axios";

import { AuthResponse } from "./../models/response/AuthResponse";
import apiAxios from "../network";
export default class AuthService {
  static async login(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
    return apiAxios.post<AuthResponse>('/auth/authenticate', { email, password });
  }

  static async registration(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
    console.log(email, password);
    return apiAxios.post<AuthResponse>('/auth/register', {email, password });
  }

  static async logout() {
    return;
  }
};