import userEvent from '@testing-library/user-event';
import { render, screen, waitForElementToBeRemoved, within } from 'test-utils';
import mockRouter from 'next-router-mock';
import { LoginForm } from './login-form';
import { LoginMutation } from './login-form.gql';
import { setupRequestHandlerMutation } from 'test/mocks/server';
import { USER, MOCK_EMAIL, MOCK_NAME, MOCK_PASSWORD } from 'src/auth/__test__/auth';

describe('<LoginForm />', () => {
  it('should render a login form', () => {
    render(<LoginForm />);

    const emailInput = screen.getByRole('textbox', { name: /email/i });
    expect(emailInput).toBeInTheDocument();

    const passwordInput = screen.getByLabelText(/password$/i, { selector: 'input' });
    expect(passwordInput).toBeInTheDocument();
  });

  it('should disable submit button when values are invalid', () => {
    render(<LoginForm />);

    const submitButton = screen.getByRole('button', { name: /sign in/i });

    expect(submitButton).toBeDisabled();
  });

  it('should enable submit button on valid values', async () => {
    const user = userEvent.setup();

    render(<LoginForm />);

    const emailInput = screen.getByRole('textbox', { name: /email/i });
    await user.type(emailInput, MOCK_EMAIL);

    const passwordInput = screen.getByLabelText(/password$/i, { selector: 'input' });
    await user.type(passwordInput, MOCK_PASSWORD);

    const submitButton = screen.getByRole('button', {
      name: /sign in/i,
    });

    expect(submitButton).toBeEnabled();
  });

  it('should display email error message on invalid credentials', async () => {
    setupRequestHandlerMutation('Login', {
      errors: [
        {
          message: 'invalid credentials',
          path: ['login'],
        },
      ],
    });
    const user = userEvent.setup();

    render(<LoginForm />);

    const emailInput = screen.getByRole('textbox', { name: /email/i });
    await user.type(emailInput, MOCK_EMAIL);

    const passwordInput = screen.getByLabelText(/password$/i, { selector: 'input' });
    await user.type(passwordInput, MOCK_PASSWORD);

    const submitButton = screen.getByRole('button', {
      name: /sign in/i,
    });
    expect(submitButton).toBeEnabled();

    await user.click(submitButton);

    const loader = await screen.findByRole('progressbar');
    expect(loader).toBeInTheDocument();

    await waitForElementToBeRemoved(() => screen.queryByRole('progressbar'));

    const emailInputErrorMessage = screen.getByText(/invalid credentials/i, { selector: 'p' });
    expect(emailInputErrorMessage).toBeInTheDocument();

    const emailErrorDialog = within(screen.getByRole('alert')).getByText(/invalid credentials/i);
    expect(emailErrorDialog).toBeInTheDocument();
  });

  it('should redirect on success', async () => {
    setupRequestHandlerMutation<LoginMutation>('Login', {
      data: {
        login: USER,
      },
    });
    const user = userEvent.setup();

    render(<LoginForm />);

    const emailInput = screen.getByRole('textbox', { name: /email/i });
    await user.type(emailInput, MOCK_EMAIL);

    const passwordInput = screen.getByLabelText(/password$/i, { selector: 'input' });
    await user.type(passwordInput, MOCK_PASSWORD);

    const submitButton = screen.getByRole('button', {
      name: /sign in/i,
    });

    expect(submitButton).toBeEnabled();

    await user.click(submitButton);

    const loader = await screen.findByRole('progressbar');
    expect(loader).toBeInTheDocument();

    await waitForElementToBeRemoved(() => screen.queryByRole('progressbar'));

    const emailInputErrorMessage = screen.queryByText(/the email address already in use/i, { selector: 'p' });
    expect(emailInputErrorMessage).not.toBeInTheDocument();
    expect(mockRouter.pathname).toMatch(/dashboard/i);
  });
});
