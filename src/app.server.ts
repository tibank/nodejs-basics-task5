import { ApolloServer } from 'apollo-server';
import { typeDefs } from './common/all.schema';
import { resolvers } from './common/all.resolvers';
import { GenreAPI } from './modules/genres/genre.service';
import { UserAPI } from './modules/users/user.service';
import { IRequest } from './common/request.interface';

export const createServer = () => {
  return new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: true,
    cache: 'bounded',
    context: ({ req }: IRequest) => {
      const token = req.headers.authorization || '';
      console.log(token);

      return { token };
    },
    dataSources: () => {
      return {
        genreAPI: new GenreAPI(),
        userAPI: new UserAPI(),
      };
    },
  });
};
