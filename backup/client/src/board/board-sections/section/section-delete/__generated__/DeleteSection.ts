/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { MutationStatus } from "./../../../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: DeleteSection
// ====================================================

export interface DeleteSection_deleteSection_section {
  __typename: "Section";
  id: string;
}

export interface DeleteSection_deleteSection {
  __typename: "SectionMutationResponse";
  status: MutationStatus;
  section: DeleteSection_deleteSection_section;
}

export interface DeleteSection {
  deleteSection: DeleteSection_deleteSection;
}

export interface DeleteSectionVariables {
  id: string;
}
