import React, { FC, ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { global, theme } from '../styles';
import { Global } from '@emotion/react';
import { AlertProvider } from 'src/alert';
import { MockedProvider } from '@apollo/client/testing';
import { useForm } from 'react-hook-form';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import type { NextRouter } from 'next/router';

export const mockRouter = (props: Partial<NextRouter> = {}): NextRouter => ({
  asPath: '/',
  basePath: '/',
  back: jest.fn(() => Promise.resolve(true)),
  beforePopState: jest.fn(() => Promise.resolve(true)),
  events: {
    on: jest.fn(),
    off: jest.fn(),
    emit: jest.fn(),
  },
  isFallback: false,
  isLocaleDomain: true,
  isPreview: true,
  isReady: true,
  pathname: '/',
  push: jest.fn(() => Promise.resolve(true)),
  prefetch: jest.fn(() => Promise.resolve()),
  reload: jest.fn(() => Promise.resolve(true)),
  replace: jest.fn(() => Promise.resolve(true)),
  route: '/',
  query: {},
  ...props,
});

/**
 * @link https://testing-library.com/docs/react-testing-library/setup/#configuring-jest-with-test-utils
 */
const AllTheProviders: FC<{ children: React.ReactElement<any, string | React.JSXElementConstructor<any>> }> = ({
  children,
}) => {
  const [pathname, setPathname] = React.useState('/');
  const value = mockRouter({
    pathname,
    push: async (newPathname: string) => {
      setPathname(newPathname);
      return true;
    },
  });

  return (
    <RouterContext.Provider value={value}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Global styles={global} />
        <MockedProvider mocks={[]}>
          <AlertProvider>{children}</AlertProvider>
        </MockedProvider>
      </ThemeProvider>
    </RouterContext.Provider>
  );
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: AllTheProviders, ...options });

const ControllerWrapper: React.FC<{ controller: React.FC<any> }> = ({ controller: Component }) => {
  const { control } = useForm<any>();

  return (
    <form>
      <Component control={control} defaultValue="" />
    </form>
  );
};

export const renderController = (controller: React.FC<any>, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(<ControllerWrapper controller={controller} />, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
