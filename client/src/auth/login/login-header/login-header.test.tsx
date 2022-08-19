import { render, screen } from 'test-utils';
import { LoginHeader } from './login-header';

describe('<LoginHeader />', () => {
  it('should render with logo', () => {
    render(<LoginHeader />);
    const logo = screen.getByRole('heading', {
      name: /assign/i,
    });
    expect(logo).toBeInTheDocument();
  });
});
