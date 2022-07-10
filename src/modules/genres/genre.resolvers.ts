import { Genre } from '../genres/genre.model';

export const genreResolver = {
  Query: {
    async genre(_: any, { id }: any, { dataSources }: any): Promise<Genre> {
      const data = await dataSources.genreAPI.getGenre(id);
      return data;
    },
    async genres(_: any, __: any, { dataSources }: any): Promise<Genre> {
      const data = await dataSources.genreAPI.getGenres();
      return data;
    },
  },

  Mutation: {
    async createGenre(_: any, { genre }: any, { dataSources }: any): Promise<Genre> {
      const data = await dataSources.genreAPI.createGenre(genre);
      return data;
    },
    async updateGenre(_: any, { genre }: any, { dataSources }: any): Promise<Genre> {
      const data = await dataSources.genreAPI.updateGenre(genre);
      return data;
    },
    async deleteGenre(_: any, { id }: any, { dataSources }: any): Promise<Genre> {
      const data = await dataSources.genreAPI.deleteGenre(id);
      return data;
    },
  },
};
