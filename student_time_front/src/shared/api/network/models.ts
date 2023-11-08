export interface LogoutResponse {
  logout: boolean;
}

export interface AuthResponse {
  accessToken: string;
  userRole: string;
}

export interface accessTokenResponse {
  accessToken: string;
}

export interface IAboutUser {
  userEmail: string;
  userRole: string;
}