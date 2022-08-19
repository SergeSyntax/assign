import React, { FC, ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { global, theme } from '../styles';
import { Global } from '@emotion/react';
import { AlertProvider } from 'src/alert';
import { MockedProvider } from '@apollo/client/testing';
import { useForm } from 'react-hook-form';

/**
 * @link https://testing-library.com/docs/react-testing-library/setup/#configuring-jest-with-test-utils
 */
const AllTheProviders: FC<{ children: React.ReactElement<any, string | React.JSXElementConstructor<any>> }> = ({
  children,
}) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Global styles={global} />
      <MockedProvider mocks={[]}>
        <AlertProvider>{children}</AlertProvider>
      </MockedProvider>
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
