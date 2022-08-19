import { render, screen } from 'test-utils';
import { RegistrationLinks } from './registration-links';

describe('<RegistrationLinks />', () => {
  it('should include privacy policy link', () => {
    render(<RegistrationLinks />);
    const link = screen.getByRole('link', { name: /privacy policy/i });
    expect(link).toBeInTheDocument();
  });

  it('should include terms of use link', () => {
    render(<RegistrationLinks />);
    const link = screen.getByRole('link', { name: /terms of use/i });
    expect(link).toBeInTheDocument();
  });

  it('should include sign in suggestion link', () => {
    render(<RegistrationLinks />);
    const link = screen.getByRole('link', { name: /sign in/i });
    expect(link).toBeInTheDocument();
  });
});
