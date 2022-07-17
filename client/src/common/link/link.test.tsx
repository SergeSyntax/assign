import { getRoles, render, screen } from 'test-utils';
import { Link } from './link';

jest.mock('next/router', () => {
  return {
    useRouter: jest.fn(() => ({ pathname: '/' })),
  };
});

describe('<Link />', () => {
  it('should render', () => {
    const link = 'http://test.com';
    const linkText = 'test';
    render(<Link href={link}>{linkText}</Link>);
    const linkEle = screen.getByRole('link', { name: 'test' });
    expect(linkEle).toBeInTheDocument();
  });
});
