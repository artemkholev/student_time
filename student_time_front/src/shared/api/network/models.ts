export interface IUser {
  isAuth: boolean
  userRole: string
}

export interface IRegistrationUser {
  email: string;
  password: string;
}

export interface IAuthUser {
  email: string;
  password: string;
}

export interface IAboutUser {
  userEmail: string;
  userRole: string;
}