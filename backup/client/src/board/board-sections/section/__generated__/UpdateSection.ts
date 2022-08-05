/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UpdateSectionData, MutationStatus } from "./../../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: UpdateSection
// ====================================================

export interface UpdateSection_updateSection_section {
  __typename: "Section";
  id: string;
  projectId: string;
  title: string;
  createdAt: any;
  updatedAt: any;
}

export interface UpdateSection_updateSection {
  __typename: "SectionMutationResponse";
  status: MutationStatus;
  section: UpdateSection_updateSection_section;
}

export interface UpdateSection {
  updateSection: UpdateSection_updateSection;
}

export interface UpdateSectionVariables {
  id: string;
  data: UpdateSectionData;
}
