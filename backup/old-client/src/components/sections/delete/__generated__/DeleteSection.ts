/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: DeleteSection
// ====================================================

export interface DeleteSection_deleteSection {
  __typename: "Section";
  title: string | null;
  id: string;
  createdAt: string | null;
  updatedAt: string | null;
  sectionId: string;
}

export interface DeleteSection {
  deleteSection: DeleteSection_deleteSection | null;
}

export interface DeleteSectionVariables {
  deleteSectionId: string;
}
