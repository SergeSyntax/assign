// Optional: configure or set up a testing framework before each test.
// If you delete this file, remove `setupFilesAfterEnv` from `jest.config.js`

// Used for __tests__/testing-library.js
// Learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';
/**
 * @link https://emotion.sh/docs/@emotion/jest#custom-matchers
 */
import { matchers } from '@emotion/jest';
expect.extend(matchers);

import { configure } from '@testing-library/react';
import { clearStore, initializeApollo } from 'config';
import { server } from './mocks/server';

/**
 * solve the next router mock issue
 * @link https://github.com/vercel/next.js/issues/7479
 * @link https://github.com/scottrippey/next-router-mock
 */
jest.mock('next/router', () => jest.requireActual('next-router-mock'));

/**
 * @link https://testing-library.com/docs/dom-testing-library/api-configuration
 */
configure({ throwSuggestions: true, asyncUtilTimeout: 800 });

// Establish API mocking before all tests.
beforeAll(() => {
  initializeApollo();
  // Enable the mocking in tests.
  return server.listen();
});
// Ensure Apollo cache is cleared between tests.
beforeEach(clearStore);
// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(server.resetHandlers);
// Clean up after the tests are finished.
afterAll(server.close);
