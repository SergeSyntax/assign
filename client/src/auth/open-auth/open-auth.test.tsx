import { render, screen } from 'test-utils';
import { setupRequestHandlerQuery } from 'test/mocks/server';
import { OpenAuth } from './open-auth';
import { OpenAuthQuery } from './open-auth.gql';

const defaultData = { isGithubProviderConnected: false, isGoogleProviderConnected: false };

describe('<OpenAuth />', () => {
  describe('Github Button', () => {
    it('should render enabled button if github is available on the server', async () => {
      setupRequestHandlerQuery<OpenAuthQuery>('OpenAuth', {
        data: { ...defaultData, isGithubProviderConnected: true },
      });
      render(<OpenAuth />);

      const loadingBars = screen.getAllByRole('progressbar');
      expect(loadingBars).toHaveLength(2);

      const githubButton = await screen.findByRole('button', { name: /github/ });

      expect(githubButton).toBeInTheDocument();
      expect(githubButton).toBeEnabled();
    });

    it('should render disabled button if github is disabled on the server', async () => {
      setupRequestHandlerQuery<OpenAuthQuery>('OpenAuth', {
        data: defaultData,
      });
      render(<OpenAuth />);
      const githubButton = await screen.findByRole('button', { name: /github/ });

      expect(githubButton).toBeInTheDocument();
      expect(githubButton).toBeDisabled();
    });
  });

  describe('Google Button', () => {
    it('should render enabled button if google is available on the server', async () => {
      setupRequestHandlerQuery<OpenAuthQuery>('OpenAuth', {
        data: { ...defaultData, isGoogleProviderConnected: true },
      });
      render(<OpenAuth />);

      const loadingBars = screen.getAllByRole('progressbar');
      expect(loadingBars).toHaveLength(2);

      const googleButton = await screen.findByRole('button', { name: /google/ });

      expect(googleButton).toBeInTheDocument();
      expect(googleButton).toBeEnabled();
    });

    it('should render disabled button if google is disabled on the server', async () => {
      setupRequestHandlerQuery<OpenAuthQuery>('OpenAuth', {
        data: defaultData,
      });
      render(<OpenAuth />);
      const googleButton = await screen.findByRole('button', { name: /google/ });

      expect(googleButton).toBeInTheDocument();
      expect(googleButton).toBeDisabled();
    });
  });
});
