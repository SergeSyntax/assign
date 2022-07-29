import { gql } from "@apollo/client"

export const REGISTRATION_GQL = gql`
  mutation Registration($createUserData: CreateUserData!) {
    registration(createUserData: $createUserData) {
      id
      name
      email
    }
  }
  `