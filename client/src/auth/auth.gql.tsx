import * as Types from '../common/apollo/types';

import { gql } from '@apollo/client';
export type UserIdentifiersFragment = { __typename?: 'User', id: string, name: string, email: string };

export const UserIdentifiersFragmentDoc = gql`
    fragment UserIdentifiers on User {
  id
  name
  email
}
    `;