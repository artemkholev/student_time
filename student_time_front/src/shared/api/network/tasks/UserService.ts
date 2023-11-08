import { AxiosResponse } from 'axios';
import { IAboutUser } from '../models';
import apiAxios  from '../base';

const INFO_ABOUT_USER_URL = '/users/info'
export default class UserService {
  static async getUser(): Promise<AxiosResponse<IAboutUser>> {
    return apiAxios.get<IAboutUser>(INFO_ABOUT_USER_URL);
  }
}