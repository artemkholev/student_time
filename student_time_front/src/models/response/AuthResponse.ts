import { IUser } from "../IUser";

export interface AuthResponse {
  accessToken: string;
  userResponse: IUser;
}