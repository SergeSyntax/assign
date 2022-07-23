import { gql } from 'apollo-server-core';
import { graphqlRequest } from '../graphql-request';

describe('users', () => {
  describe('user register', () => {
    it('should return a user', async () => {
      const user = {
        email: 'tesfxxtta@ffafest.com',
        password: 'test',
        name: 'test',
      };

      const res = await graphqlRequest({
        query: gql`
          mutation Mutation($data: CreateUserData!) {
            registration(data: $data) {
              id
              name
              email
            }
          }
        `,
        variables: {
          data: user,
        },
      });

      // TODO: header and cookie check
      expect(res.body.data.registration).toEqual(
        expect.objectContaining({ email: user.email, name: user.name }),
      );
    });
  });
});
