/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: DeleteTask
// ====================================================

export interface DeleteTask_deleteTask {
  __typename: "Task";
  title: string | null;
  id: string;
  createdAt: string | null;
  updatedAt: string | null;
  sectionId: string;
}

export interface DeleteTask {
  deleteTask: DeleteTask_deleteTask | null;
}

export interface DeleteTaskVariables {
  deleteTaskId: string;
}
