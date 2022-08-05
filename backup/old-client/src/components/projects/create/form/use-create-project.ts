import { useMutation, gql } from '@apollo/client';
import * as CreateProjectTypes from './__generated__/CreateProject';

export const CreateProject = gql`
  mutation CreateProject($title: String, $accessibility: Boolean) {
    createProject(title: $title, accessibility: $accessibility) {
      id
      title
      accessibility
      owner
      createdAt
      updatedAt
    }
  }
`;

// TODO: add error dispatch for failure
export const useCreateProject = () => {
  return useMutation<CreateProjectTypes.CreateProject, CreateProjectTypes.CreateProjectVariables>(
    CreateProject
  );
};
