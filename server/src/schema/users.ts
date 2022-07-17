import { gql } from 'apollo-server-core';

export const usersSchemas = gql`
  enum Role {
    ADMIN
    MODERATOR
    MEMBER
  }

  input CreateUserData {
    email: String! @constraint(minLength: 1, maxLength: 255, format: "email")
    password: String! @constraint(minLength: 1, maxLength: 255)
    name: String @constraint(minLength: 1, maxLength: 255)
  }

  type User {
    id: ID!
    name: String!
    email: String!
    token: String!
  }

  type Mutation {
    registration(data: CreateUserData!): User!
  }

  type Query {
    profile: User!
  }
`;
