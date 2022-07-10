import { gql } from 'apollo-server';

export const user = gql`
  type User {
    id: ID!
    firstName: String
    lastName: String
    password: String
    email: String!
  }

  input UserLogin {
    password: String
    email: String!
  }

  type Token {
    jwt: String!
  }

  type Query {
    user(id: ID!): User!
    jwt(login: UserLogin): Token
  }

  input UserRegister {
    firstName: String
    lastName: String
    password: String
    email: String!
  }

  type Mutation {
    register(userRegister: UserRegister): User
  }
`;
