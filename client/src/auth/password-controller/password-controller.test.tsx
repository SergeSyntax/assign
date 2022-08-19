import { renderController, screen } from 'test-utils';
import { PasswordController } from './password-controller';
import userEvent from '@testing-library/user-event';

describe('<PasswordController>', () => {
  it('should render password input', () => {
    renderController(PasswordController);
    const passwordInput = screen.getByLabelText(/password$/i, { selector: 'input' });
    expect(passwordInput).toBeInTheDocument();
  });

  it('should hide password text by default', () => {
    renderController(PasswordController);
    const passwordInput = screen.getByLabelText(/password$/i, { selector: 'input' });

    expect(passwordInput).toHaveAttribute('type', 'password');
  });

  it('should show/hide password on toggle click', async () => {
    const user = userEvent.setup();

    renderController(PasswordController);
    const passwordInput = screen.getByLabelText(/password$/i, { selector: 'input' });
    expect(passwordInput).toHaveAttribute('type', 'password');
    const togglePasswordVisibilityButton = screen.getByRole('button');

    await user.click(togglePasswordVisibilityButton);
    expect(passwordInput).toHaveAttribute('type', 'text');

    await user.click(togglePasswordVisibilityButton);
    expect(passwordInput).toHaveAttribute('type', 'password');
  });
});
