import { render, screen } from 'test-utils';
import { SubmitButton } from './button';

describe('<SubmitButton />', () => {
  it('should render button in loading state', () => {
    render(<SubmitButton text="test" disabled={false} inProgress={true} />);

    const loader = screen.getByRole('progressbar');
    expect(loader).toBeInTheDocument();
  });

  it('should render button in disabled state', () => {
    render(<SubmitButton text="test" disabled={true} inProgress={false} />);

    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
  });

  it('should render button in valid state', () => {
    render(<SubmitButton text="test" disabled={false} inProgress={false} />);

    const button = screen.getByRole('button');
    expect(button).toBeEnabled();

    const loader = screen.queryByRole('progressbar');
    expect(loader).not.toBeInTheDocument();
  });
});
