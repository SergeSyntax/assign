import { useMutation } from '@apollo/client';
import { useContext } from 'react';
import { AlertContext, alertDisplayFailure, alertDisplayFailureNetwork } from '../../../alert';
import { FETCH_PROJECTS } from '../../../projects-panel/projects-list/fetch-projects.gql';
import { CREATE_PROJECT } from './create-project.gql';
import { CreateProjectVariables } from './__generated__/CreateProject';

export const useCreateProject = (variables: CreateProjectVariables) => {
  const { dispatch } = useContext(AlertContext);
  return useMutation<CreateProjectVariables>(CREATE_PROJECT, {
    variables,
    refetchQueries: [FETCH_PROJECTS],
    onError(err) {
      if (err.message === 'Failed to fetch') {
        return dispatch(alertDisplayFailure('Network Error'));
      }

      const { graphQLErrors, networkError, clientErrors } = err;
      console.log(JSON.stringify(err, null, 2));
      err.message;
      if (graphQLErrors.length) {
        const [firstGraphQLErrors] = graphQLErrors;
        return dispatch(alertDisplayFailure(firstGraphQLErrors.message));
      }

      if (networkError) {
        // return dispatch(alertDisplayFailureNetwork(networkError.));
      }
    },
  });
};
