import { gql } from 'apollo-server';

export const band = gql`
  type Band {
    id: ID!
    name: String
    origin: String
    members: [Artist]
    website: String
    genres: [Genre]
  }
`;
