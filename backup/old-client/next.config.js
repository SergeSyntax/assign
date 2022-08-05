/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  // Only run ESLint on the 'pages' and 'utils' directories during production builds (next build)
  eslint: {
    dirs: ['src']
  }
};
