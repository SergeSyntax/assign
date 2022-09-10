import { gql } from 'apollo-server-core';

export const usersSchemas = gql`
  enum Role {
    ADMIN
    REVIEWER
    USER
  }

  input RegistrationInput {
    email: String! @constraint(minLength: 1, maxLength: 255, format: "email")
    password: String! @constraint(minLength: 1, maxLength: 255)
    name: String @constraint(minLength: 1, maxLength: 255)
  }

  input LoginInput {
    email: String! @constraint(minLength: 1, maxLength: 255, format: "email")
    password: String! @constraint(minLength: 1, maxLength: 255)
  }

  type User {
    id: ID!
    name: String!
    email: String!
    image: String
  }

  type Mutation {
    registration(registrationInput: RegistrationInput!): User!
    login(loginInput: LoginInput!): User!
  }

  type Query {
    currentUser: User!
    isGoogleProviderConnected: Boolean!
    isGithubProviderConnected: Boolean!
  }
`;
