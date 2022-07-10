import { User } from './user.model';

export const userResolver = {
  Query: {
    async user(_: any, { id }: any, { dataSources }: any): Promise<User> {
      const data = await dataSources.userAPI.getUser(id);
      return data;
    },
    async jwt(_: any, { login }: any, { dataSources }: any): Promise<String> {
      const data = await dataSources.userAPI.login(login);
      console.log(data);
      return data;
    },
  },

  Mutation: {
    async register(_: any, { userRegister }: any, { dataSources }: any): Promise<User> {
      console.log(userRegister);
      const data = await dataSources.userAPI.register(userRegister);
      return data;
    },
  },
};
