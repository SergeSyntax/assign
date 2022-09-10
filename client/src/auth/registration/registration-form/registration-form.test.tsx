import userEvent from '@testing-library/user-event';
import { render, screen, waitForElementToBeRemoved, within } from 'test-utils';
import mockRouter from 'next-router-mock';
import { RegistrationForm } from './registration-form';
import { setupRequestHandlerMutation } from 'test/mocks/server';
import { RegistrationMutation } from './registration-form.gql';
import { USER, MOCK_EMAIL, MOCK_NAME, MOCK_PASSWORD } from 'src/auth/__test__/auth';

describe('<RegistrationForm />', () => {
  it('should render a registration form', () => {
    render(<RegistrationForm />);

    const nameInput = screen.getByRole('textbox', { name: /name/i });
    expect(nameInput).toBeInTheDocument();

    const emailInput = screen.getByRole('textbox', { name: /email/i });
    expect(emailInput).toBeInTheDocument();

    const passwordInput = screen.getByLabelText(/password$/i, { selector: 'input' });
    expect(passwordInput).toBeInTheDocument();
  });

  it('should disable submit button when values are invalid', () => {
    render(<RegistrationForm />);

    const submitButton = screen.getByRole('button', { name: /agree & join/i });

    expect(submitButton).toBeDisabled();
  });

  it('should enable submit button on valid values', async () => {
    const user = userEvent.setup();

    render(<RegistrationForm />);

    const nameInput = screen.getByRole('textbox', { name: /name/i });
    await user.type(nameInput, MOCK_NAME);

    const emailInput = screen.getByRole('textbox', { name: /email/i });
    await user.type(emailInput, MOCK_EMAIL);

    const passwordInput = screen.getByLabelText(/password$/i, { selector: 'input' });
    await user.type(passwordInput, MOCK_PASSWORD);

    const submitButton = screen.getByRole('button', {
      name: /agree & join/i,
    });

    expect(submitButton).toBeEnabled();
  });

  it('should display email error message on used emails', async () => {
    setupRequestHandlerMutation<RegistrationMutation>('Registration', {
      errors: [
        {
          message: 'the email address already in use',
          path: ['registration'],
        },
      ],
    });
    const user = userEvent.setup();

    render(<RegistrationForm />);

    const nameInput = screen.getByRole('textbox', { name: /name/i });
    await user.type(nameInput, MOCK_NAME);

    const emailInput = screen.getByRole('textbox', { name: /email/i });
    await user.type(emailInput, MOCK_EMAIL);

    const passwordInput = screen.getByLabelText(/password$/i, { selector: 'input' });
    await user.type(passwordInput, MOCK_PASSWORD);

    const submitButton = screen.getByRole('button', {
      name: /agree & join/i,
    });
    expect(submitButton).toBeEnabled();

    await user.click(submitButton);

    const loader = await screen.findByRole('progressbar');
    expect(loader).toBeInTheDocument();

    await waitForElementToBeRemoved(() => screen.queryByRole('progressbar'));

    const emailInputErrorMessage = screen.getByText(/the email address already in use/i, { selector: 'p' });
    expect(emailInputErrorMessage).toBeInTheDocument();

    const emailErrorDialog = within(screen.getByRole('alert')).getByText(/the email address already in use/i);
    expect(emailErrorDialog).toBeInTheDocument();
  });

  it('should redirect on success', async () => {
    setupRequestHandlerMutation<RegistrationMutation>('Registration', { data: { registration: USER } });
    const user = userEvent.setup();

    render(<RegistrationForm />);

    const nameInput = screen.getByRole('textbox', { name: /name/i });
    await user.type(nameInput, MOCK_NAME);

    const emailInput = screen.getByRole('textbox', { name: /email/i });
    await user.type(emailInput, MOCK_EMAIL);

    const passwordInput = screen.getByLabelText(/password$/i, { selector: 'input' });
    await user.type(passwordInput, MOCK_PASSWORD);

    const submitButton = screen.getByRole('button', {
      name: /agree & join/i,
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
