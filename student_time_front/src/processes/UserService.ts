import { AxiosResponse } from 'axios';
import { IAboutUser } from '../models/IAboutUser';
import apiAxios  from '../shared/api/network';

const INFO_ABOUT_USER_URL = '/users/info'
export default class UserService {
  static async getUser(): Promise<AxiosResponse<IAboutUser>> {
    return apiAxios.get<IAboutUser>(INFO_ABOUT_USER_URL);
  }
}