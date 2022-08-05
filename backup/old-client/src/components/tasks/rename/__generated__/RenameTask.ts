/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: RenameTask
// ====================================================

export interface RenameTask_renameTask {
  __typename: "Task";
  title: string | null;
  id: string;
  createdAt: string | null;
  updatedAt: string | null;
  sectionId: string;
}

export interface RenameTask {
  renameTask: RenameTask_renameTask | null;
}

export interface RenameTaskVariables {
  id: string;
  title: string;
}
