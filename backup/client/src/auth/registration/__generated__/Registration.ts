/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CreateUserData, MutationStatus } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: Registration
// ====================================================

export interface Registration_registration_user {
  __typename: "UserPayload";
  id: string;
  name: string;
  email: string;
  token: string;
}

export interface Registration_registration {
  __typename: "UserMutationResponse";
  status: MutationStatus;
  user: Registration_registration_user | null;
}

export interface Registration {
  registration: Registration_registration;
}

export interface RegistrationVariables {
  data: CreateUserData;
}
