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

/**
 * @link https://testing-library.com/docs/dom-testing-library/api-configuration
 */
configure({ throwSuggestions: true, asyncUtilTimeout: 800 });
