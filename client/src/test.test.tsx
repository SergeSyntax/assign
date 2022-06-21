import { render } from '@testing-library/react';
import Create from './Create';
import { test } from './random';

beforeAll(() => {
  console.log('test');
});

it('test', () => {
  render(<Create key={'test'} />);
  expect(test).toBe(1);
});

it('should pass', () => {
  const mock = jest.fn();
  const mock2 = jest.fn();
  mock();
  mock2();
  expect(mock2).toHaveBeenCalled();
});
