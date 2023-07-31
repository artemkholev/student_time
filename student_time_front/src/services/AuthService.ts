import axios, { AxiosResponse } from "axios";

import { AuthResponse } from "./../models/response/AuthResponse";
import { apiAxios } from "../network";

export default class AuthService {
  static async login(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
    return apiAxios.post<AuthResponse>('/login', { email, password });
  }
  static async registration() {
    return;
  }
  static async logout() {
    return;
  }
};