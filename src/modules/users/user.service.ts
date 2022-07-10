import { RESTDataSource } from 'apollo-datasource-rest';
import { User } from './user.model';
import { IUserLoginDto, IUserRegisterDto } from './user.dto';

export class UserAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://localhost:3004/v1/users';
  }

  async getUser(id: any): Promise<User> {
    const data = await this.get(`/${encodeURIComponent(id)}`);

    return { ...data, id: data._id };
  }

  async register(user: IUserRegisterDto): Promise<User> {
    const data = await this.post(`/register`, user);

    return { ...data, id: data._id };
  }

  async login(user: IUserLoginDto): Promise<String> {
    const data = await this.post(`/login`, user);

    return data;
  }
}
