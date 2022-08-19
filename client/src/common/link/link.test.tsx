import { render, screen } from 'test-utils';
import { Link } from './link';

describe('<Link />', () => {
  it('should render', () => {
    const link = 'http://test.com';
    const linkText = 'test';
    render(<Link href={link}>{linkText}</Link>);
    const linkEle = screen.getByRole('link', { name: 'test' });
    expect(linkEle).toBeInTheDocument();
  });
});
