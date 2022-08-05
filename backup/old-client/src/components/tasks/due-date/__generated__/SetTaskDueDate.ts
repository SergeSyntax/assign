/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: SetTaskDueDate
// ====================================================

export interface SetTaskDueDate_setTaskDueDate {
  __typename: "Task";
  title: string | null;
  id: string;
  createdAt: string | null;
  updatedAt: string | null;
  sectionId: string;
}

export interface SetTaskDueDate {
  setTaskDueDate: SetTaskDueDate_setTaskDueDate | null;
}

export interface SetTaskDueDateVariables {
  setTaskDueDateId: string;
  dueDate?: string | null;
}
