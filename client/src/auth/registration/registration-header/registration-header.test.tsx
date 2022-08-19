import { render, screen } from 'test-utils';
import { RegistrationHeader } from './registration-header';

describe('<RegistrationHeader />', () => {
  it('should include a title', () => {
    render(<RegistrationHeader />);
    const title = screen.getByText(/make most of your teamwork!/i);
    expect(title).toBeInTheDocument();
  });
});
