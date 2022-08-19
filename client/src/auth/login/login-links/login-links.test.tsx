import { render, screen } from 'test-utils';
import { LoginLinks } from './login-links';

describe('<LoginLinks />', () => {
  it('should include forgot password link', () => {
    render(<LoginLinks />);
    const link = screen.getByRole('link', { name: /forgot password/i });
    expect(link).toBeInTheDocument();
  });

  it('should include registration suggestion link', () => {
    render(<LoginLinks />);
    const link = screen.getByRole('link', { name: /join now/i });
    expect(link).toBeInTheDocument();
  });
});
