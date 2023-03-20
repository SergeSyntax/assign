import { gql } from 'apollo-server-core';

export const boardsSchemas = gql`
  """
  This enum stand for who can see the Project:
  """
  enum Accessibility {
    "Only the current User."
    PRIVATE
    "Only the team members of the project and the current user."
    TEAM
    "Everyone can see the project"
    PUBLIC
  }

  type Project {
    """
    support markdown language
    Description for field
    Supports **multi-line** description for your [API](http://example.com)!
    """
    id: ID!
    title: String!
    accessibility: Accessibility!
    # owner: String
    createdAt: Date!
    updatedAt: Date!
  }

  input CreateProjectInput {
    title: String!
    accessibility: Accessibility!
  }

  # input RegistrationInput {
  #   email: String! @constraint(minLength: 1, maxLength: 255, format: "email")
  #   password: String! @constraint(minLength: 1, maxLength: 255)
  #   name: String @constraint(minLength: 1, maxLength: 255)
  # }

  # input LoginInput {
  #   email: String! @constraint(minLength: 1, maxLength: 255, format: "email")
  #   password: String! @constraint(minLength: 1, maxLength: 255)
  # }

  # type User {
  #   id: ID!
  #   name: String!
  #   email: String!
  #   image: String
  # }

  type Mutation {
    createProject(createProjectInput: CreateProjectInput!): Project!
  }

  type Query {

  }
`;
