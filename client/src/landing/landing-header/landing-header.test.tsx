import { LandingHeader } from '../..';
import { render, screen } from '@testing-library/react';

describe('<LandingHeader />', () => {
  it('should render', () => {
    const { container } = render(<LandingHeader />);
    expect(container).toBeInTheDocument();
  });

  it('should include logo with link', () => {
    render(<LandingHeader />);
    const logo = screen.queryByRole('link', { name: /assign/i });
    expect(logo).toBeInTheDocument();
  });

  it('should include button join now', () => {
    render(<LandingHeader />);
    const logo = screen.queryByRole('link', { name: /join now/i });
    expect(logo).toBeInTheDocument();
  });

  it('should include button sign in', () => {
    const { container } = render(<LandingHeader />);
    const logo = screen.queryByRole('link', { name: /sign in/i });
    // eslint-disable-next-line testing-library/no-debugging-utils
    screen.debug();
    expect(logo).toBeInTheDocument();
  });
});
