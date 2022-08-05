/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: Registration
// ====================================================

export interface Registration_registration {
  __typename: "User";
  id: string;
  email: string | null;
  name: string | null;
  token: string | null;
}

export interface Registration {
  registration: Registration_registration | null;
}

export interface RegistrationVariables {
  email?: string | null;
  password?: string | null;
  name?: string | null;
}
