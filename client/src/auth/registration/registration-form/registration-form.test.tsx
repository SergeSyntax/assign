import userEvent from '@testing-library/user-event';
import { render, screen } from 'test-utils';
import { RegistrationForm } from './registration-form';

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
    await user.type(nameInput, 'name');

    const emailInput = screen.getByRole('textbox', { name: /email/i });
    await user.type(emailInput, 'email@email.com');

    const passwordInput = screen.getByLabelText(/password$/i, { selector: 'input' });
    await user.type(passwordInput, 'secret');

    const submitButton = screen.getByRole('button', {
      name: /agree & join/i,
    });

    expect(submitButton).toBeEnabled();
  });
});
