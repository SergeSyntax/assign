import { render, screen } from 'test-utils';
import { RegistrationForm } from './registration-form';

describe('<RegistrationForm />', () => {
  it('should render a registration form', () => {
    render(<RegistrationForm />);
    const inputs = screen.getAllByRole('textbox');
    expect(inputs.length).toBeGreaterThan(0);
  });

  it('should render name input', () => {
    render(<RegistrationForm />);
    const nameInput = screen.getByRole('textbox', {
      name: /name/i,
    });

    expect(nameInput).toBeInTheDocument();
  });

  it('should render email input', () => {
    render(<RegistrationForm />);
    const emailInput = screen.getByRole('textbox', {
      name: /email/i,
    });

    expect(emailInput).toBeInTheDocument();
  });

  it('should render password input', () => {
    render(<RegistrationForm />);
    const passwordInput = screen.getByLabelText(/password$/i, { selector: 'input' });

    expect(passwordInput).toBeInTheDocument();
  });
});
