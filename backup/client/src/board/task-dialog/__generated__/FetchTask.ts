/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: FetchTask
// ====================================================

export interface FetchTask_fetchTask {
  __typename: "Task";
  id: string;
  title: string;
  order: number | null;
  dueDate: any | null;
  description: string | null;
  sectionId: string;
  createdAt: any;
  updatedAt: any;
}

export interface FetchTask {
  fetchTask: FetchTask_fetchTask | null;
}

export interface FetchTaskVariables {
  id: string;
}
