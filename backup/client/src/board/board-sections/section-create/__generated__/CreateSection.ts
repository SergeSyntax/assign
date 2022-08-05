/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CreateSectionData, MutationStatus } from "./../../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: CreateSection
// ====================================================

export interface CreateSection_createSection_section {
  __typename: "Section";
  id: string;
  projectId: string;
  title: string;
  createdAt: any;
  updatedAt: any;
}

export interface CreateSection_createSection {
  __typename: "SectionMutationResponse";
  status: MutationStatus;
  section: CreateSection_createSection_section;
}

export interface CreateSection {
  createSection: CreateSection_createSection;
}

export interface CreateSectionVariables {
  data: CreateSectionData;
}
