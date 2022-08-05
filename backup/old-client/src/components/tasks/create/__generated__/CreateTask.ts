/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateTask
// ====================================================

export interface CreateTask_createTask {
  __typename: "Task";
  title: string | null;
  id: string;
  createdAt: string | null;
  updatedAt: string | null;
  sectionId: string;
}

export interface CreateTask {
  createTask: CreateTask_createTask | null;
}

export interface CreateTaskVariables {
  sectionId: string;
  title: string;
}
