/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CreateTaskData, MutationStatus } from "./../../../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: CreateTask
// ====================================================

export interface CreateTask_createTask_task {
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

export interface CreateTask_createTask {
  __typename: "TaskMutationResponse";
  status: MutationStatus;
  task: CreateTask_createTask_task;
}

export interface CreateTask {
  createTask: CreateTask_createTask;
}

export interface CreateTaskVariables {
  data: CreateTaskData;
}
