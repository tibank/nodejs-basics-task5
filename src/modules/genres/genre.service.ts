import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { Genre } from './genre.model';
import { IGenreCreateDto, IGenreUpdateDto } from './genre.dto';

export class GenreAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://localhost:3001/v1/genres';
  }

  willSendRequest(request: RequestOptions) {
    request.headers.set('Authorization', `${this.context.token}`);
  }

  async getGenre(id: any): Promise<Genre> {
    const data = await this.get(`/${encodeURIComponent(id)}`);

    return { ...data, id: data._id };
  }

  async getGenres(): Promise<Genre[]> {
    const { items } = await this.get(`/`);
    const result: Genre[] = [];
    for (let i = 0; i < items.length; i++) {
      const item = items[i];

      result.push({ ...item, id: item._id });
    }

    return result;
  }

  async createGenre(genre: IGenreCreateDto): Promise<Genre> {
    const data = await this.post(`/`, genre);

    return { ...data, id: data._id };
  }

  async updateGenre(genre: IGenreUpdateDto): Promise<Genre> {
    const data = await this.put(`/${genre.id}`, genre);

    return { ...data, id: data._id };
  }

  async deleteGenre(id: String): Promise<Genre> {
    const data = await this.delete(`/${id}`);

    return data;
  }
}
