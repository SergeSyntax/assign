/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Task
// ====================================================

export interface Task_task {
  __typename: "Task";
  title: string | null;
  id: string;
  createdAt: string | null;
  updatedAt: string | null;
  sectionId: string;
}

export interface Task {
  task: Task_task | null;
}

export interface TaskVariables {
  taskId?: string | null;
}
