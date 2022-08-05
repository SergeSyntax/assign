/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { Accessibility } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL fragment: ProjectFields
// ====================================================

export interface ProjectFields {
  __typename: "Project";
  /**
   * support markdown language
   * Description for field
   * Supports **multi-line** description for your [API](http: // example.com)!
   */
  id: string;
  title: string;
  accessibility: Accessibility;
  createdAt: any;
  updatedAt: any;
}
