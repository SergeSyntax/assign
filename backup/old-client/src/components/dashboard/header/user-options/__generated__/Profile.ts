/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Profile
// ====================================================

export interface Profile_profile {
  __typename: "User";
  id: string;
  email: string | null;
  name: string | null;
  token: string | null;
}

export interface Profile {
  profile: Profile_profile | null;
}
