import * as Types from '../../../common/apollo/types';

import { gql } from '@apollo/client';
import { UserIdentifiersFragmentDoc } from '../../auth.gql';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type RegistrationMutationVariables = Types.Exact<{
  registrationInput: Types.RegistrationInput;
}>;


export type RegistrationMutation = { __typename?: 'Mutation', registration: { __typename?: 'User', id: string, name: string, email: string, image?: string | undefined } };


export const RegistrationDocument = gql`
    mutation Registration($registrationInput: RegistrationInput!) {
  registration(registrationInput: $registrationInput) {
    ...UserIdentifiers
  }
}
    ${UserIdentifiersFragmentDoc}`;
export type RegistrationMutationFn = Apollo.MutationFunction<RegistrationMutation, RegistrationMutationVariables>;

/**
 * __useRegistrationMutation__
 *
 * To run a mutation, you first call `useRegistrationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegistrationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registrationMutation, { data, loading, error }] = useRegistrationMutation({
 *   variables: {
 *      registrationInput: // value for 'registrationInput'
 *   },
 * });
 */
export function useRegistrationMutation(baseOptions?: Apollo.MutationHookOptions<RegistrationMutation, RegistrationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegistrationMutation, RegistrationMutationVariables>(RegistrationDocument, options);
      }
export type RegistrationMutationHookResult = ReturnType<typeof useRegistrationMutation>;
export type RegistrationMutationResult = Apollo.MutationResult<RegistrationMutation>;
export type RegistrationMutationOptions = Apollo.BaseMutationOptions<RegistrationMutation, RegistrationMutationVariables>;