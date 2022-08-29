import React, { FC, ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Global } from '@emotion/react';
import { useForm } from 'react-hook-form';
import { ApolloProvider } from '@apollo/client';
import { global, theme } from '../styles';
import { AlertProvider } from 'src/alert';
import { useApollo } from 'config';

/**
 * @link https://testing-library.com/docs/react-testing-library/setup/#configuring-jest-with-test-utils
 */
const AllTheProviders: FC<{ children: React.ReactElement<any, string | React.JSXElementConstructor<any>> }> = ({
  children,
}) => {
  const client = useApollo({});

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Global styles={global} />
      <ApolloProvider client={client}>
        <AlertProvider>{children}</AlertProvider>
      </ApolloProvider>
    </ThemeProvider>
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
