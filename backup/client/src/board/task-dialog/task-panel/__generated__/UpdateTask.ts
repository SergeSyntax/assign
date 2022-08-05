/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UpdateTaskData, MutationStatus } from "./../../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: UpdateTask
// ====================================================

export interface UpdateTask_updateTask_task {
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

export interface UpdateTask_updateTask {
  __typename: "TaskMutationResponse";
  status: MutationStatus;
  task: UpdateTask_updateTask_task;
}

export interface UpdateTask {
  updateTask: UpdateTask_updateTask;
}

export interface UpdateTaskVariables {
  id: string;
  data: UpdateTaskData;
}
