import { userResolver } from '../modules/users/user.resolvers';
import { genreResolver } from '../modules/genres/genre.resolvers';

export const resolvers = [userResolver, genreResolver];
