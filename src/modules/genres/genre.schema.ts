import { gql } from 'apollo-server';

export const genre = gql`
  type Genre {
    id: ID!
    name: String
    description: String
    country: String
    year: Int
  }

  type Query {
    genres: [Genre!]!
    genre(id: ID!): Genre!
  }

  input InputGenre {
    name: String
    description: String!
    country: String
    year: Int
  }

  input UpdateGenre {
    id: ID!
    name: String
    description: String!
    country: String
    year: Int
  }

  type ResponseDeletedGenre {
    acknowledged: Boolean
    deletedCount: Int
  }

  type Mutation {
    createGenre(genre: InputGenre): Genre!
    updateGenre(genre: UpdateGenre): Genre!
    deleteGenre(id: ID!): ResponseDeletedGenre!
  }
`;
