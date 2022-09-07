import { graphql } from 'msw';
import { render, screen } from 'test-utils';
import { server } from 'test/mocks/server';
import { OpenAuth } from './open-auth';
import { OpenAuthQuery } from './open-auth.gql';

const setupRequestHandler = ({ isGithubEnabled = true, isGoogleEnabled = true }) =>
  server.use(
    graphql.query<OpenAuthQuery>('OpenAuth', async (_req, res, ctx) =>
      res(
        ctx.data({
          isGoogleProviderConnected: isGoogleEnabled,
          isGithubProviderConnected: isGithubEnabled,
        }),
      ),
    ),
  );

describe('<OpenAuth />', () => {
  describe('Github Button', () => {
    it('should render enabled button if github is available on the server', async () => {
      setupRequestHandler({ isGithubEnabled: true });
      render(<OpenAuth />);
      const githubButton = await screen.findByRole('button', { name: /github/ });

      expect(githubButton).toBeInTheDocument();
      expect(githubButton).toBeEnabled();
    });

    it('should render disabled button if github is disabled on the server', async () => {
      setupRequestHandler({ isGithubEnabled: false });
      render(<OpenAuth />);
      const githubButton = await screen.findByRole('button', { name: /github/ });

      expect(githubButton).toBeInTheDocument();
      expect(githubButton).toBeDisabled();
    });
  });

  describe('Google Button', () => {
    it('should render enabled button if google is available on the server', async () => {
      setupRequestHandler({ isGoogleEnabled: true });
      render(<OpenAuth />);
      const googleButton = await screen.findByRole('button', { name: /google/ });

      expect(googleButton).toBeInTheDocument();
      expect(googleButton).toBeEnabled();
    });

    it('should render disabled button if google is disabled on the server', async () => {
      setupRequestHandler({ isGoogleEnabled: false });
      render(<OpenAuth />);
      const googleButton = await screen.findByRole('button', { name: /google/ });

      expect(googleButton).toBeInTheDocument();
      expect(googleButton).toBeDisabled();
    });
  });
});
